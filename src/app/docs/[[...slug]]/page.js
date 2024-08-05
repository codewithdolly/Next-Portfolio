import React from "react";

function page({ params }) {
  const { slug } = params;
  console.log(slug, "slug");
  
  if (params.slug?.length === 2) {
    return (
      <h1>
        viewing docts from features{params.slug[0]}, and consept{" "}
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>viewing docs for features{params.slug[0]}</h1>;
  }

  return <div>This is Catch All Segment Route Home page.</div>;
}

export default page;
