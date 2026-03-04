import svgPaths from "./svg-vdelx866xc";
import clsx from "clsx";
import imgFrame4 from "figma:asset/907c3a94c63776ef133a3d886e481d2fab35b0ab.png";
import imgFrame5 from "figma:asset/dc39e183569953b3e008ea0395f5b1ce244b95a1.png";
import imgHomePage from "figma:asset/412f4955d01987800b94e8979b57ee116cbf86a1.png";
import imgPic from "figma:asset/f4e793d4be65dfdff4d5749e6019ab2b2f7a0b36.png";
import imgPic1 from "figma:asset/bfd3959882ec9a50815556fcfe0c910105e5ea7c.png";
import imgPic2 from "figma:asset/e70be5e8661adce08be33fd38819dd51e91f829c.png";
import imgPic3 from "figma:asset/c597c9105082bc589b109b1680617fdfe61e4569.png";
import imgPic4 from "figma:asset/237dde6434b6cea4f138458fe2782cf446fb4483.png";
import imgPic5 from "figma:asset/031f4e1213b4e59f216bd4c0865e1171d2ca71b8.png";
import imgPic6 from "figma:asset/44e7b5fada7d19b754175354fe7191f6335e090e.png";
import imgPic7 from "figma:asset/b3ce4bc67d6c05f8f927313cc397b2b0eee5573c.png";
import imgPic8 from "figma:asset/139f4adc9748df2e6a5ad4d1e7eaa51aaddfd6ef.png";
import imgUnileverLogo1 from "figma:asset/03da734b5e1fc10fdd332ab5330978938430d256.png";
import imgPG1 from "figma:asset/4dd6a01cfdab161bdcf0118f48f08fedbcab088d.png";
import imgNescafeLogo2014Present1 from "figma:asset/ba1be3179bbd2fe1cc0ee691f8abfc70cd42051b.png";
import imgNiva1 from "figma:asset/586b629eb1cfc64b7b0dbee6df3bba86b4860816.png";
import imgImages1 from "figma:asset/6a455e7231499c1d6d7e0d5af431948de02fc8b6.png";
import imgImages21 from "figma:asset/b6a2cb43a25f333dc873de23b6b06971e1f3d4b8.png";
import imgImages11 from "figma:asset/6be6da0fb7aac377527c4feeb1567bb62f099596.png";
import imgHeinzLogo1 from "figma:asset/f31212953d8a1e668bcad7908d9d7c75934fab02.png";
import imgGilletteLogo1 from "figma:asset/d5b7a1837dd5c364c77db384948ede81d674d01f.png";
import imgDownload1 from "figma:asset/b2e85b1d30ba5c0689ce1371446a7a82684fae6d.png";
import imgLogoo1 from "figma:asset/78522203951b03c7f4f786130d6319c0d105c528.png";

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[46px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[33px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        {children}
      </svg>
    </div>
  );
}

function PicBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[139px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("relative rounded-[5.033px] shrink-0 w-[167.338px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5.033px]">{children}</div>
    </div>
  );
}

function TextBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[221px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[24px] py-[32px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("flex-none", additionalClassNames)}>
      <div className="h-0 relative w-[10.52px]">
        <div className="absolute inset-[-1.25px_-11.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0225 2.50304">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0">
      <p className="capitalize font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" dir="auto">
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0">
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white" dir="auto">
        {text}
      </p>
    </div>
  );
}
type ImagesBackgroundImageProps = {
  additionalClassNames?: string;
};

function ImagesBackgroundImage({ additionalClassNames = "" }: ImagesBackgroundImageProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] relative size-[108.647px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImages1} />
    </div>
  );
}
type NivaBackgroundImageProps = {
  additionalClassNames?: string;
};

function NivaBackgroundImage({ additionalClassNames = "" }: NivaBackgroundImageProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] h-[111.781px] ml-0 relative w-[198.699px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNiva1} />
    </div>
  );
}
type NescafeLogo2014PresentBackgroundImageProps = {
  additionalClassNames?: string;
};

function NescafeLogo2014PresentBackgroundImage({ additionalClassNames = "" }: NescafeLogo2014PresentBackgroundImageProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] mt-[47px] relative", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNescafeLogo2014Present1} />
    </div>
  );
}
type PGBackgroundImageProps = {
  additionalClassNames?: string;
};

function PGBackgroundImage({ additionalClassNames = "" }: PGBackgroundImageProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] h-[89.843px] mt-[41.56px] relative w-[149.599px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPG1} />
    </div>
  );
}
type BtnAboutMoreBackgroundImageAndTextProps = {
  text: string;
};

function BtnAboutMoreBackgroundImageAndText({ text }: BtnAboutMoreBackgroundImageAndTextProps) {
  return (
    <div className="absolute bg-[#ff9934] inset-[0_0_0_23.66%] overflow-clip rounded-br-[2.984px] rounded-tr-[2.984px]">
      <p className="absolute font-['ADLaM_Display:Regular',sans-serif] leading-[normal] left-[calc(50%+0.47px)] not-italic text-[12px] text-center text-white top-[calc(50%-8.48px)] translate-x-[-50%] w-[76.59px]" dir="auto">
        {text}
      </p>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-[7.859px] items-center justify-center top-[12.31px] w-[6.993px]", additionalClassNames)}>
      <BackgroundImage2 additionalClassNames="rotate-[131.664deg]">
        <path d={svgPaths.p2dd9b000} fill="var(--stroke-0, white)" id="Line 2" />
      </BackgroundImage2>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-[7.178px] items-center justify-center top-[4.95px] w-[7.69px]", additionalClassNames)}>
      <BackgroundImage2 additionalClassNames="rotate-[43.025deg]">
        <path d="M1.25152 1.25152H11.771" id="Line 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2.50304" />
      </BackgroundImage2>
    </div>
  );
}

function ArrowBackgroundImage() {
  return (
    <div className="absolute contents left-[5.63px] top-[4.95px]">
      <BackgroundImage additionalClassNames="left-[11.89px]" />
      <BackgroundImage additionalClassNames="left-[5.63px]" />
      <BackgroundImage1 additionalClassNames="left-[12.74px]" />
      <BackgroundImage1 additionalClassNames="left-[6.48px]" />
    </div>
  );
}

function Frame() {
  return (
    <BackgroundImage3 additionalClassNames="h-[47.811px]">
      <img alt="" className="absolute h-[132.1%] left-[-6.57%] max-w-none top-[-16.05%] w-[113.14%]" src={imgFrame4} />
    </BackgroundImage3>
  );
}

function Frame1() {
  return (
    <BackgroundImage3 additionalClassNames="h-[46.553px]">
      <img alt="" className="absolute h-[136.36%] left-[-7.8%] max-w-none top-[-18.18%] w-[113.48%]" src={imgFrame5} />
    </BackgroundImage3>
  );
}

function BtnDownload() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.516px] items-start justify-center left-[78px] top-[907px] w-[173px]" data-name="btn download">
      <div className="flex flex-col font-['Alexandria:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2e2e2e] text-[15.098px] text-nowrap">
        <p className="leading-[1.2]" dir="auto">
          Download the app
        </p>
      </div>
      <Frame />
      <Frame1 />
    </div>
  );
}

function AboutUsFathallahMarkets() {
  return (
    <div className="absolute h-[125px] left-[75px] top-[-133px] w-[741.964px]" data-name="'About us  Fathallah Markets'">
      <p className="absolute font-['Al-Mujahed_Free_yr:Regular',sans-serif] inset-0 leading-[0.99] not-italic text-[64px] text-black" dir="auto">
        <span>
          {`"About us `}
          <br aria-hidden="true" />
        </span>
        <span className="font-['ADLaM_Display:Regular',sans-serif] text-[#ff7f00]">Fathallah</span>
        <span>{` Markets"`}</span>
      </p>
    </div>
  );
}

function HomePage() {
  return (
    <div className="h-[820px] overflow-clip relative shrink-0 w-[1440px]" data-name="HomePage">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHomePage} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(179.342deg, rgba(255, 255, 255, 0) 92.384%, rgb(255, 255, 255) 98.954%), linear-gradient(-39.2951deg, rgba(255, 255, 255, 0) 5.2978%, rgb(255, 255, 255) 94.702%)" }} />
      </div>
      <div className="absolute flex flex-col font-['ADLaM_Display:Regular',sans-serif] justify-center leading-[0] left-[-624px] not-italic text-[24px] text-black top-[431.5px] translate-y-[-50%] w-[624px]">
        <p className="leading-[1.22]" dir="auto">{`"More than 70 years of experience and excellence"`}</p>
      </div>
      <BtnDownload />
      <AboutUsFathallahMarkets />
    </div>
  );
}

function MapText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative shrink-0 w-[1018px]" data-name="map Text">
      <p className="font-['ADLaM_Display:Regular',sans-serif] leading-[normal] not-italic opacity-0 relative shrink-0 text-[#2e2e2e] text-[56px] text-nowrap text-right" dir="auto">
        News
      </p>
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[1.8] min-w-full opacity-0 relative shrink-0 text-[#3b3b3b] text-[24px] text-center w-[min-content]" dir="auto">{`"Welcome to our platform, where we share the latest news and updates that matter to you. Here, you'll find everything new—from our projects and services to our recent achievements. I’m delighted to stay in constant touch with you and keep you informed about the latest developments. Follow me regularly for inspiring insights and exclusive news!"`}</p>
    </div>
  );
}

function Pic() {
  return (
    <PicBackgroundImage>
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgPic} />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgPic1} />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgPic2} />
    </PicBackgroundImage>
  );
}

function BtnAboutMore() {
  return (
    <div className="absolute bg-[#ff9934] inset-[0_0_0_23.66%] overflow-clip rounded-br-[2.984px] rounded-tr-[2.984px]" data-name="btn about more">
      <p className="absolute font-['ADLaM_Display:Regular',sans-serif] leading-[normal] left-[calc(50%+0.12px)] not-italic text-[12px] text-center text-white top-[calc(50%-7.52px)] translate-x-[-50%] w-[76.59px]" dir="auto">
        Read More
      </p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="absolute bg-[#363636] inset-[0_74.97%_0_0] overflow-clip rounded-bl-[2.984px] rounded-tl-[2.984px]" data-name="arrow">
      <ArrowBackgroundImage />
    </div>
  );
}

function BtnShowMore() {
  return (
    <div className="h-[25.03px] relative shadow-[0px_2.503px_2.503px_0px_rgba(0,0,0,0.25),0px_0.626px_1.877px_0px_rgba(0,0,0,0.3)] shrink-0 w-[100px]" data-name="btn show more">
      <BtnAboutMore />
      <Arrow />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[7px] items-start px-[24px] py-[31px] relative w-full">
          <p className="capitalize font-['ADLaM_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap text-right" dir="auto">
            New products
          </p>
          <div className="capitalize font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-[212px]">
            <p className="mb-0" dir="auto">
              Informing customers about the availability of new products or distinctive brands in the supermarket.
            </p>
            <p className="mb-0" dir="auto">
              &nbsp;
            </p>
            <p className="mb-0" dir="auto">
              &nbsp;
            </p>
            <p dir="auto">&nbsp;</p>
          </div>
          <BtnShowMore />
        </div>
      </div>
    </div>
  );
}

function NewProduct() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[360px] items-start left-[1990px] overflow-clip rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] top-[16px] w-[260px]" data-name="New Product">
      <Pic />
      <Text />
    </div>
  );
}

function Pic1() {
  return (
    <div className="h-[139px] relative shrink-0 w-full" data-name="pic">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPic3} />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="absolute bg-[#363636] inset-[0_74.97%_0_0] overflow-clip rounded-bl-[2.984px] rounded-tl-[2.984px]" data-name="arrow">
      <ArrowBackgroundImage />
    </div>
  );
}

function BtnShowMore1() {
  return (
    <div className="h-[25.03px] relative shadow-[0px_2.503px_2.503px_0px_rgba(0,0,0,0.25),0px_0.626px_1.877px_0px_rgba(0,0,0,0.3)] shrink-0 w-[100px]" data-name="btn show more">
      <BtnAboutMoreBackgroundImageAndText text="Read More" />
      <Arrow1 />
    </div>
  );
}

function Text1() {
  return (
    <TextBackgroundImage>
      <p className="capitalize font-['ADLaM_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap" dir="auto">
        Working hours
      </p>
      <p className="capitalize font-['Arial:Regular',sans-serif] leading-[14px] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]" dir="auto">
        Inform customers of any changes in working hours, especially during seasons or based on government decisions.
        <br aria-hidden="true" />
        For example, new opening and closing times for stores and malls were announced
      </p>
      <BtnShowMore1 />
    </TextBackgroundImage>
  );
}

function WorkingHours() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[360px] items-start left-[1730px] overflow-clip rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] top-[16px] w-[260px]" data-name="Working Hours">
      <Pic1 />
      <Text1 />
    </div>
  );
}

function Pic2() {
  return (
    <div className="h-[139px] relative shrink-0 w-full" data-name="pic">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[187.05%] left-0 max-w-none top-[-53.87%] w-full" src={imgPic4} />
      </div>
    </div>
  );
}

function BtnAboutMore1() {
  return (
    <div className="absolute bg-[#ff9934] inset-[0_0_0_23.66%] overflow-clip rounded-br-[2.984px] rounded-tr-[2.984px]" data-name="btn about more">
      <div className="absolute flex flex-col font-['ADLaM_Display:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-0.33px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%+0.48px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal]" dir="auto">
          Read More
        </p>
      </div>
    </div>
  );
}

function Arrow2() {
  return (
    <div className="absolute bg-[#363636] inset-[0_74.97%_0_0] overflow-clip rounded-bl-[2.984px] rounded-tl-[2.984px]" data-name="arrow">
      <ArrowBackgroundImage />
    </div>
  );
}

function BtnShowMore2() {
  return (
    <div className="h-[25.03px] relative shadow-[0px_2.503px_2.503px_0px_rgba(0,0,0,0.25),0px_0.626px_1.877px_0px_rgba(0,0,0,0.3)] shrink-0 w-[100px]" data-name="btn show more">
      <BtnAboutMore1 />
      <Arrow2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[221px] relative shrink-0 w-full" data-name="text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[7px] items-start px-[24px] py-[32px] relative size-full">
          <p className="capitalize font-['ADLaM_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap" dir="auto">
            New services
          </p>
          <div className="capitalize font-['Arial:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]">
            <p className="mb-0" dir="auto">
              Such as home delivery services or online shopping, which may make the shopping experience easier for customers.
            </p>
            <p className="mb-0" dir="auto">
              &nbsp;
            </p>
            <p dir="auto">&nbsp;</p>
          </div>
          <BtnShowMore2 />
        </div>
      </div>
    </div>
  );
}

function NewServices() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[360px] items-start left-[688.33px] overflow-clip rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] top-[561px] w-[260px]" data-name="New Services">
      <Pic2 />
      <Text2 />
    </div>
  );
}

function Pic3() {
  return (
    <PicBackgroundImage>
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgPic} />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgPic1} />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgPic5} />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgPic6} />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgPic7} />
    </PicBackgroundImage>
  );
}

function BtnAboutMore2() {
  return (
    <div className="absolute bg-[#ff9934] inset-[0_0_0_23.66%] overflow-clip rounded-br-[2.984px] rounded-tr-[2.984px]" data-name="btn about more">
      <p className="absolute font-['ADLaM_Display:Regular',sans-serif] leading-[normal] left-[calc(50%+0.12px)] not-italic text-[12px] text-center text-white top-[calc(50%-8.48px)] translate-x-[-50%] w-[76.59px]" dir="auto">
        Read More
      </p>
    </div>
  );
}

function Arrow3() {
  return (
    <div className="absolute bg-[#363636] inset-[0_74.97%_0_0] overflow-clip rounded-bl-[2.984px] rounded-tl-[2.984px]" data-name="arrow">
      <ArrowBackgroundImage />
    </div>
  );
}

function BtnShowMore3() {
  return (
    <div className="h-[25.03px] relative shadow-[0px_2.503px_2.503px_0px_rgba(0,0,0,0.25),0px_0.626px_1.877px_0px_rgba(0,0,0,0.3)] shrink-0 w-[100px]" data-name="btn show more">
      <BtnAboutMore2 />
      <Arrow3 />
    </div>
  );
}

function Text3() {
  return (
    <TextBackgroundImage>
      <p className="capitalize font-['ADLaM_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap" dir="auto">
        Safety and hygiene
      </p>
      <p className="capitalize font-['Arial:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]" dir="auto">
        Especially in light of the current health conditions, it is important to reassure customers about the measures taken to ensure their safety while shopping.
      </p>
      <BtnShowMore3 />
    </TextBackgroundImage>
  );
}

function SafetyAndHygiene() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[360px] items-start justify-center left-[-810px] overflow-clip rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] top-[16px] w-[260px]" data-name="Safety and Hygiene">
      <Pic3 />
      <Text3 />
    </div>
  );
}

function Pic4() {
  return (
    <div className="h-[139px] relative shrink-0 w-full" data-name="pic">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPic8} />
    </div>
  );
}

function Arrow4() {
  return (
    <div className="absolute bg-[#363636] inset-[0_74.97%_0_0] overflow-clip rounded-bl-[2.984px] rounded-tl-[2.984px]" data-name="arrow">
      <ArrowBackgroundImage />
    </div>
  );
}

function BtnShowMore4() {
  return (
    <div className="h-[25.03px] relative shadow-[0px_2.503px_2.503px_0px_rgba(0,0,0,0.25),0px_0.626px_1.877px_0px_rgba(0,0,0,0.3)] shrink-0 w-[100px]" data-name="btn show more">
      <BtnAboutMoreBackgroundImageAndText text="Read More" />
      <Arrow4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[221px] relative shrink-0 w-full" data-name="text">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[16px] py-[32px] relative size-full">
          <p className="capitalize font-['ADLaM_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]" dir="auto">
            Social responsibility and community initiatives
          </p>
          <p className="font-['Arial:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-black w-[min-content]" dir="auto">
            Highlight any initiatives undertaken by the supermarket to support the local community or participate in charitable activities.
          </p>
          <BtnShowMore4 />
        </div>
      </div>
    </div>
  );
}

function SocialResponsibilityAndCommunityInitiatives() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[360px] items-start left-[-353px] overflow-clip rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] top-[16px] w-[260px]" data-name="Social Responsibility and Community Initiatives">
      <Pic4 />
      <Text4 />
    </div>
  );
}

function Card() {
  return (
    <div className="h-[392px] overflow-clip relative shrink-0 w-full" data-name="Card">
      <NewProduct />
      <WorkingHours />
      <NewServices />
      <SafetyAndHygiene />
      <SocialResponsibilityAndCommunityInitiatives />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[24px] py-[22px] relative w-full">
          <MapText />
          <Card />
        </div>
      </div>
    </div>
  );
}

function News() {
  return (
    <div className="bg-white content-start flex flex-wrap h-[919.023px] items-start justify-between px-0 py-[70px] relative shrink-0 w-full" data-name="News">
      <Frame4 />
    </div>
  );
}

function MapText1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[24px] items-center ml-[0.25px] mt-0 overflow-clip px-[28px] py-0 relative text-center w-[1440px]" data-name="map Text">
      <p className="capitalize font-['ADLaM_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic opacity-0 relative shrink-0 text-[#2e2e2e] text-[56px] w-[min-content]" dir="auto">
        Success partners
      </p>
      <div className="font-['Alexandria:Light',sans-serif] font-light leading-[1.8] opacity-0 relative shrink-0 text-[#3b3b3b] text-[24px] w-[955px]">
        <p className="mb-0" dir="auto">
          We extend our sincere thanks to our success partners who have supported us in our journey towards excellence. Thanks to their cooperation and trust, we have been able to achieve outstanding achievements and we are committed to strengthening this partnership to move forward towards a future full of success.
        </p>
        <p dir="auto">&nbsp;</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <div className="[grid-area:1_/_1] h-[82.739px] ml-[11.07px] mt-[45.13px] relative w-[147.092px]" data-name="Unilever-Logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUnileverLogo1} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <PGBackgroundImage additionalClassNames="ml-[9.83px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <NescafeLogo2014PresentBackgroundImage additionalClassNames="h-[78px] ml-[15.56px] w-[139px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-[14.33px] mt-0 rounded-[4.179px] w-[169.239px]" />
      <NivaBackgroundImage additionalClassNames="mt-[30px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <ImagesBackgroundImage additionalClassNames="ml-[30.58px] mt-[30px]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <div className="[grid-area:1_/_1] h-[127.243px] ml-[0.34px] mt-[26.1px] relative w-[169px]" data-name="images (2) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[67.59%] left-[4.5%] max-w-none top-[5.98%] w-[90.47%]" src={imgImages21} />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <div className="[grid-area:1_/_1] h-[119.512px] ml-[27px] mt-[24px] relative w-[116.796px]" data-name="images (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImages11} />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <div className="[grid-area:1_/_1] h-[73.964px] ml-[11.04px] mt-[42.6px] relative w-[147.928px]" data-name="Heinz-logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeinzLogo1} />
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <div className="[grid-area:1_/_1] h-[80.859px] ml-[17.83px] mt-[46.6px] relative w-[134.764px]" data-name="Gillette-logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGilletteLogo1} />
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <div className="[grid-area:1_/_1] h-[67.278px] ml-[32.28px] mt-[60px] relative w-[119.271px]" data-name="download 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDownload1} />
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <PGBackgroundImage additionalClassNames="ml-[9.8px]" />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <NescafeLogo2014PresentBackgroundImage additionalClassNames="h-[70px] ml-[22.13px] w-[125px]" />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-[14.29px] mt-0 rounded-[4.179px] w-[169.239px]" />
      <NivaBackgroundImage additionalClassNames="mt-[32px]" />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[173px] ml-0 mt-0 rounded-[4.179px] w-[169.239px]" />
      <ImagesBackgroundImage additionalClassNames="ml-[30.63px] mt-[28px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center leading-[0] left-[-78px] top-0">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
    </div>
  );
}

function Component1() {
  return (
    <div className="[grid-area:1_/_1] h-[173px] ml-0 mt-[345px] opacity-0 overflow-clip relative w-[1365px]" data-name="Component 9">
      <Frame6 />
    </div>
  );
}

function Partener() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Partener">
      <MapText1 />
      <Component1 />
    </div>
  );
}

function News1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip px-0 py-[70px] relative shrink-0 w-full" data-name="News">
      <Partener />
    </div>
  );
}

function Email() {
  return (
    <div className="h-[22.25px] overflow-clip relative w-[29.667px]" data-name="Email">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6667 22.25">
        <g id="Layer 2">
          <path d={svgPaths.p3e8f300} fill="var(--fill-0, black)" id="Icons" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white h-[40px] overflow-clip relative rounded-bl-[20px] rounded-tl-[20px] w-[56.158px]">
      <div className="absolute flex h-[22.434px] items-center justify-center left-[13.31px] top-[8.91px] w-[29.805px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.643deg]">
          <Email />
        </div>
      </div>
    </div>
  );
}

function Call() {
  return (
    <div className="content-stretch flex gap-[11px] h-[38px] items-center relative rounded-[20px] shrink-0 w-[274px]" data-name="Call">
      <div aria-hidden="true" className="absolute border-[3px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[21.5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_1px_3px_0px_rgba(0,0,0,0.3)]" />
      <div className="flex h-[40.349px] items-center justify-center relative shrink-0 w-[56.406px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.357deg]">
          <Frame5 />
        </div>
      </div>
      <p className="capitalize font-['Alexandria:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] w-[131px]">enter your email</p>
    </div>
  );
}

function Address() {
  return (
    <BackgroundImage4>
      <g id="address">
        <path d={svgPaths.p2e2f5c00} fill="var(--fill-0, white)" id="Vector" />
        <path d={svgPaths.p1f133100} fill="var(--fill-0, white)" id="Vector_2" />
      </g>
    </BackgroundImage4>
  );
}

function Address1() {
  return (
    <div className="bg-[#ff9934] content-stretch flex gap-[8px] h-[38px] items-center justify-center relative rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_1px_3px_0px_rgba(0,0,0,0.3)] shrink-0 w-[160px]" data-name="address">
      <Address />
      <p className="font-['Alexandria:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[17px] text-right text-white w-[85px]" dir="auto">
        Subscript
      </p>
    </div>
  );
}

function Subscript() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[232px] items-start overflow-clip relative rounded-[17.053px] shrink-0 w-[302px]" data-name="Subscript">
      <p className="font-['Alexandria:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]" dir="auto">
        Subscript
      </p>
      <Call />
      <Address1 />
    </div>
  );
}

function Address2() {
  return (
    <div className="content-stretch flex h-[38px] items-center justify-end relative shrink-0 w-full" data-name="address">
      <p className="basis-0 capitalize font-['Alexandria:Bold',sans-serif] font-bold grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[10px] text-white" dir="auto">
        {" "}
      </p>
    </div>
  );
}

function Address3() {
  return (
    <div className="relative shrink-0 size-[27.711px]" data-name="address">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.7112 27.7112">
        <g id="address">
          <path d={svgPaths.p1d682e00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p38089600} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Address4() {
  return (
    <div className="content-stretch flex gap-[4px] h-[38px] items-center relative shrink-0 w-full" data-name="address">
      <Address3 />
      <p className="capitalize font-['Alexandria:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[10px] text-white w-[172px]" dir="auto">
        The main commercial market in Smouha
      </p>
    </div>
  );
}

function Call1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[38px] items-center relative shrink-0 w-[208px]" data-name="Call">
      <div className="h-[26.922px] relative shrink-0 w-[25px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 26.9216">
          <path d={svgPaths.pd821200} fill="var(--fill-0, #D9D9D9)" id="Vector" />
        </svg>
      </div>
      <p className="font-['ADLaM_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.79px] text-nowrap text-white">15249</p>
    </div>
  );
}

function Email1() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Email">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Email">
          <path d={svgPaths.p2c197c80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2f27fd00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2927be40} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Email2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[38px] items-center justify-end relative shrink-0 w-full" data-name="Email">
      <Email1 />
      <p className="basis-0 font-['ADLaM_Display:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12.79px] text-white" dir="auto">
        cs@aswaqfathalla.com
      </p>
    </div>
  );
}

function CardFooterC() {
  return (
    <div className="content-stretch flex flex-col h-[232px] items-start overflow-clip relative rounded-[17.053px] shrink-0 w-[301px]" data-name="Card Footer C">
      <p className="font-['CoconÆ_Next_Arabic:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[40px] text-nowrap text-white" dir="auto">
        Contact us
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[179px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179 2">
                <line id="Line 8" stroke="var(--stroke-0, white)" strokeWidth="2" x2="179" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Address2 />
      <Address4 />
      <Call1 />
      <Email2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0">
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" dir="auto">
        Offers
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0">
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" dir="auto">
        News
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0">
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" dir="auto">
        Branches
      </p>
    </div>
  );
}

function CardFooterC1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] h-[232px] items-start justify-center ml-0 mt-0 overflow-clip relative rounded-[17.053px]" data-name="Card Footer C">
      <BackgroundImageAndText text="Home" />
      <BackgroundImageAndText text="About Us" />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0">
      <a className="block font-['Alexandria:Light',sans-serif] font-light leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white" href="https://apps.aswaqfathalla.com/FathallaRepSys/Login.aspx">
        <p className="cursor-pointer leading-[normal]" dir="auto">
          Companies
        </p>
      </a>
    </div>
  );
}

function CardFooterC2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] h-[232px] items-start justify-center ml-[152px] mt-0 overflow-clip relative rounded-[17.053px]" data-name="Card Footer C">
      <BackgroundImageAndText text="Contact" />
      <BackgroundImageAndText text="Jobs" />
      <Frame13 />
      <BackgroundImageAndText1 text="Points card" />
      <BackgroundImageAndText1 text="Employee services" />
    </div>
  );
}

function Menu() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Menu">
      <CardFooterC1 />
      <CardFooterC2 />
    </div>
  );
}

function MapText2() {
  return (
    <div className="bg-[#2e2e2e] content-start flex flex-wrap gap-0 items-start justify-center overflow-clip px-0 py-[24px] relative shrink-0 w-full" data-name="map Text">
      <Subscript />
      <CardFooterC />
      <Menu />
    </div>
  );
}

function Twitter() {
  return (
    <BackgroundImage5>
      <g id="twitter">
        <path d={svgPaths.p2e79a00} fill="var(--fill-0, white)" id="Vector" />
      </g>
    </BackgroundImage5>
  );
}

function Facebook() {
  return (
    <BackgroundImage5>
      <g id="facebook">
        <path d={svgPaths.p18bc6300} fill="var(--fill-0, white)" id="Vector" />
      </g>
    </BackgroundImage5>
  );
}

function Instagram() {
  return (
    <BackgroundImage5>
      <g id="instagram">
        <path d={svgPaths.p23678a80} fill="var(--fill-0, white)" id="Vector" />
      </g>
    </BackgroundImage5>
  );
}

function Linkedin() {
  return (
    <BackgroundImage5>
      <g id="linkedin">
        <path d={svgPaths.p2167a700} fill="var(--fill-0, white)" id="Vector" />
      </g>
    </BackgroundImage5>
  );
}

function WhatsApp() {
  return (
    <BackgroundImage5>
      <g id="whats app">
        <path d={svgPaths.p374b6c00} fill="var(--fill-0, white)" id="Vector" />
      </g>
    </BackgroundImage5>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[11.5px] items-center justify-center relative shrink-0">
      <Twitter />
      <Facebook />
      <Instagram />
      <Linkedin />
      <WhatsApp />
    </div>
  );
}

function UnderFooter() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Under Footer">
      <div className="content-center flex flex-wrap gap-[16px] items-center justify-center overflow-clip px-0 py-[12px] relative rounded-[inherit] w-full">
        <p className="font-['ADLaM_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white w-[470px]" dir="auto">
          All rights reserved. © Fathalla | Marketing Department 2024
        </p>
        <Frame2 />
        <a className="absolute block font-['ADLaM_Display:Regular',sans-serif] leading-[0] left-[905.5px] not-italic opacity-0 text-[36px] text-center text-nowrap text-white top-[10.04px] translate-x-[-50%]" href="https://www.facebook.com/aswaqfathallamarket?locale=ar_AR">
          <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[normal] underline">FB</p>
        </a>
      </div>
      <div aria-hidden="true" className="absolute border-[2px_0px_0px] border-solid border-white inset-[-2px_0_0_0] pointer-events-none" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <MapText2 />
      <UnderFooter />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex h-[350px] items-center justify-center relative shrink-0 w-full" data-name="Footer">
      <Frame14 />
    </div>
  );
}

function Frame20() {
  return <div className="absolute left-[1241px] size-[167px] top-[2099px]" style={{ backgroundImage: "linear-gradient(90.4497deg, rgba(255, 255, 255, 0) 0.8827%, rgb(255, 255, 255) 50.992%)" }} />;
}

function Frame19() {
  return <div className="absolute left-[18px] size-[167px] top-[2099px]" style={{ backgroundImage: "linear-gradient(90.4497deg, rgb(255, 255, 255) 49.008%, rgba(255, 255, 255, 0) 99.117%)" }} />;
}

function Component() {
  return (
    <div className="absolute contents left-[18px] top-[2099px]" data-name="اخفاء ابيض">
      <Frame20 />
      <Frame19 />
    </div>
  );
}

function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Logo">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[42px]" data-name="logoo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoo1} />
      </div>
      <p className="[grid-area:1_/_1] font-['Alexandria:Bold',sans-serif] font-bold leading-[normal] ml-[203px] mt-[10px] relative text-[18px] text-right text-white translate-x-[-100%] w-[161px]">Fathalla Market</p>
    </div>
  );
}

function Earth() {
  return (
    <BackgroundImage4>
      <g clipPath="url(#clip0_1_1258)" id="Earth">
        <path d={svgPaths.p2f475140} fill="var(--fill-0, white)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_1_1258">
          <rect fill="white" height="33" width="33" />
        </clipPath>
      </defs>
    </BackgroundImage4>
  );
}

function Frame3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-center justify-center ml-0 mt-0 relative w-[66px]">
      <Earth />
      <p className="font-['Alexandria:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[12px] text-center text-white w-[min-content]" dir="auto">{`Language `}</p>
    </div>
  );
}

function Lung() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Lung">
      <Frame3 />
    </div>
  );
}

function MenuTop() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Menu Top">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between leading-[0] px-[70px] py-[10px] relative w-full">
          <Logo />
          <Lung />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex inset-[22.5%_90.09%_17.5%_1.08%] items-center justify-center">
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" dir="auto">
        Home
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex inset-[22.5%_74.59%_17.5%_12.25%] items-center justify-center">
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" dir="auto">
        About Us
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex inset-[22.5%_63.24%_17.5%_28.29%] items-center justify-center">
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" dir="auto">
        Offers
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex inset-[22.5%_52.61%_10%_39.64%] items-center justify-center">
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" dir="auto">
        News
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex inset-[22.5%_36.58%_17.5%_50.27%] items-center justify-center">
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" dir="auto">
        Branches
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex inset-[22.5%_22.52%_17.5%_66.31%] items-center justify-center">
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" dir="auto">
        Contact
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[80.36%] right-[13.15%] top-[calc(50%+1px)] translate-y-[-50%]">
      <p className="font-['Alexandria:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-center text-nowrap text-white" dir="auto">
        Jobs
      </p>
    </div>
  );
}

function MenuTest() {
  return (
    <div className="absolute h-[40px] left-[75px] top-1/2 translate-y-[-50%] w-[555px]" data-name="Menu Test">
      <div className="absolute bg-[#ff9934] inset-[22.5%_88.65%_10%_-0.36%] rounded-[10px]" />
      <Frame15 />
      <Frame16 />
      <Frame11 />
      <Frame17 />
      <Frame10 />
      <Frame12 />
      <Frame18 />
    </div>
  );
}

function MenuTop1() {
  return (
    <div className="bg-[rgba(0,0,0,0.6)] h-[72px] relative shrink-0 w-full" data-name="Menu Top">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MenuTest />
      </div>
    </div>
  );
}

function Nab() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1440px]" data-name="nab 3">
      <MenuTop />
      <MenuTop1 />
    </div>
  );
}

export default function Website() {
  return (
    <div className="bg-[#fffbf8] content-stretch flex flex-col items-start relative size-full" data-name="Website">
      <HomePage />
      <News />
      <News1 />
      <Footer />
      <Component />
      <Nab />
    </div>
  );
}