import React from "react";

import DocSummary from "./DocSummary";

const CollectionSet = ({ collection }) => (
  <div>
    {collection &&
      collection.map((item, index) => (
        <DocSummary key={index + 1} docDetails={item} />
      ))}
  </div>
);

export default CollectionSet;