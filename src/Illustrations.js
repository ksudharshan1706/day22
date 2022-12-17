export function Illustrations() {
  const stylesheet = {
    width: "50%",
    height: "50%",
  };
  return (
    <div className="card-body">
      <b>
        <div className="card-header">Illustrations</div>
      </b>
      <br></br>
      <img
        style={stylesheet}
        src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
      ></img>
      <p>
        Add some quality, svg illustrations to your project courtesy of{" "}
        <a target="_blank" rel="nofollow" href="https://undraw.co/">
          unDraw
        </a>
        , a constantly updated collection of beautiful svg images that you can
        use completely free and without attribution!
      </p>
      <a target="_blank" rel="nofollow" href="https://undraw.co/">
        Browse Illustrations on unDraw &rarr;
      </a>
      <br></br>
      <br></br>
    </div>
  );
}
