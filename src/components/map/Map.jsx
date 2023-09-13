import React from 'react'

function Map() {
    return (
        <div>
            {/* <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="100%" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=VARANASI&t=&z=8&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                    <style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}" }} />
                </div>
            </div> */}

<div className="mapouter">
  <div className="gmap_canvas">
    <iframe
      className="gmap_iframe"
      width="100%"
      frameBorder={0}
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
      src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Sai Krishana Layout, Near Pragati Nagar Arch, Pragati Nagar, Hyderabad, Telangana - 500090&t=&z=14&ie=UTF8&iwloc=B&output=embed"
    />
    <a href="https://gachanymph.com/">Gacha Nymph Download</a>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}"
    }}
  />
</div>


        </div>
    )
}

export default Map