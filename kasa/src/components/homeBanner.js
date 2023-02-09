import HomeBannerImg from '../assets/HomeBanner.png';
import '../style/components/homeBanner.css';

function HomeBanner() {
  return (
    <div className="homeBannerWrapper">
      <img
        className="homeBannerImgContainer"
        src={HomeBannerImg}
        alt="Paysage"
      />
      <h1 className="homeTitle">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default HomeBanner;
