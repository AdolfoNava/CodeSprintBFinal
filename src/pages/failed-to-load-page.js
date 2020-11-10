import React from "react";
import { Helmet } from "react-helmet";

function NotFoundPage() {
  return (
    <main>
      <Helmet>
        <title>Not Found!</title>
      </Helmet>
      <p>This page has nothing here</p>
    </main>
  );
}

export default NotFoundPage;