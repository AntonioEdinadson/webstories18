import Video from "../../components/Video";

const Home = () => {

  return (
    <div className="w-screen h-screen snap-y-mandatory overflow-y-scroll test">
      <Video url={"https://iframe.mediadelivery.net/embed/102395/a9e300a5-d57f-4877-a1ec-3d13fbd6b8ed?autoplay=true"} />
      <Video url={"https://iframe.mediadelivery.net/embed/102395/a9e300a5-d57f-4877-a1ec-3d13fbd6b8ed?autoplay=true"} />
      <Video url={"https://iframe.mediadelivery.net/embed/102395/a9e300a5-d57f-4877-a1ec-3d13fbd6b8ed?autoplay=true"} />
      <Video url={"https://iframe.mediadelivery.net/embed/102395/a9e300a5-d57f-4877-a1ec-3d13fbd6b8ed?autoplay=true"} />
    </div>

  )
}

export default Home;