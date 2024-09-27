"use client"
import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import { CollectionViewBlock, CollectionViewPageBlock, PageBlock } from 'notion-types';
import { useScrollOffset } from './useScrollOffset';  // Import the custom hook
import { formatDate, getBlockTitle, getPageProperty } from 'notion-utils'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then(m => m.Code));
const Collection = dynamic(() =>
    import('react-notion-x/build/third-party/collection').then((m) => {
      return (props) => {
        console.log('block:', props.block);  // Log the block here
        return <m.Collection {...props} />;
      };
    })
  );
  
const CustomCollection = ({ block }: { block: CollectionViewBlock | CollectionViewPageBlock | PageBlock }) => {
    console.log("bloc info: ", block);
    return (
        <div>
            strong
        </div>
    )
};
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then(m => m.Equation));
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then(m => m.Modal), { ssr: false });

const propertyDateValue = (
    { data, schema, pageHeader },
    defaultFn: () => React.ReactNode
) => {
    if (pageHeader && schema?.name?.toLowerCase() === 'published') {
        const publishDate = data?.[0]?.[1]?.[0]?.[1]?.start_date

        if (publishDate) {
            return `${formatDate(publishDate, {
                month: 'long'
            })}`
        }
    }
    console.log("schema", schema);

    return defaultFn()
}

const propertyTextValue = (
    { schema, pageHeader },
    defaultFn: () => React.ReactNode
) => {
    return <div>strong</div>
    // return <b>{defaultFn()}</b>
}

const propertyCheckboxValue = (
    { schema, pageHeader },
    defaultFn: () => React.ReactNode
) => {
    return null
}

const NotionPage = ({ recordMap }) => {
    const components = React.useMemo(
        () => ({
            Code,
            Collection,
            Equation,
            Modal,
            nextImage: Image,
            nextLink: Link,
            propertyDateValue,
            propertyTextValue,
            propertyCheckboxValue,
        }),
        []
    );

    return (
        <NotionRenderer
            recordMap={recordMap}
            components={components}
            fullPage={true}
            disableHeader={true}
            showTableOfContents={true}
            minTableOfContentsItems={3}
        />
    );
};

export default NotionPage;
