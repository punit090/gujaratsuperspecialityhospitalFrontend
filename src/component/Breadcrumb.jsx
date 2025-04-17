import React from "react";

const Breadcrumb = ({Title}) => {
  return (
    <React.Fragment>
      <section
        id="breadcrumb"
        className="breadcrumbs-area page-hero-section division parallax bg-lightgrey "
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-holder">
                <h1 className="breadcrumbTitle">{Title}</h1>
                {/* Title */}
              </div>
              {/* End hero-txt */}
            </div>{" "}
            {/* End col-md-10 */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
        <div className="parallax-inner" />
      </section>
    </React.Fragment>
  );
};

export default Breadcrumb;
