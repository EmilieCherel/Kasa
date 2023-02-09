import HomeBannerImg from '../assets/HomeBanner.png';
import HomeBannerImgMobile from '../assets/HomeBannerMobile.png';
import '../style/components/homeBanner.css';

function HomeBanner() {
  return (
    <div className="homeBannerWrapper">
      <picture>
        <source
          media="(max-width:400px)"
          srcSet={`${HomeBannerImgMobile} 335w`}
        />
        <source media="(min-width:401px)" srcSet={`${HomeBannerImg} 1240w`} />
        <img
          src={HomeBannerImg}
          alt="Paysage"
          className="homeBannerImgContainer"
        />
      </picture>
      <h1 className="homeTitle">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default HomeBanner;
