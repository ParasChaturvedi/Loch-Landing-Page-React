import React from "react";
import "./App.css";


function MidSection() {
  return (
    <>
      <div className="mid-section">
      <div className="mid-img">
      <img
          src="https://s3-alpha-sig.figma.com/img/a837/e66b/317b128c03dcf7840ae72269ac076405?Expires=1701043200&Signature=Gj4tQHx8zyr16-77-r8J~U7df-tPpvrqTwhb~sbyqPrBVFKRWr8zahxKKsdHKdnqhUCMsI6N8qJ6pOuNZKPcBaH3Gv1PDzTvv51y7D53ZqSSfcNAS60LWy9gkW-1ygtJRXRFLrP5ENepMel~w8fqgwBNv5XX2oA2StOap70CxxaNDm-pJ0QYBpl7qhibMg7g5a19OvuBDeYhSrKypo7EJr2xnN51WIjhLMq6mWu4YHle8d5D1PoByQdtRPfvg6PVFG8m0ZDpl0tyQvUB7vKRf53Q4QIt7oTMVyUXtQolIeYGTzTbOXO~mo7gfy6hMt5pluhMTGNd2fN8zeA7ZRGVxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Img"
        />
      </div>
        
        <div className="content-mid-section">
          <i class="fa-regular fa-eye icon"></i>
          <h1 className="mid-heading">Watch what the whales are doing</h1>
          <p className="mid-para">All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
        </div>
      </div>
    </>
  );
}

export default MidSection;
