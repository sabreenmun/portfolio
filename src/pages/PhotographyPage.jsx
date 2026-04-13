import Sidebar from "../components/Sidebar";
import basketball from "../assets/images/basketball.jpg";
import boatdoha from "../assets/images/boatdoha.jpg";
import boatdubai from "../assets/images/boatdubai.jpg";
import concertguy from "../assets/images/concertguy.jpg";
import darkwater from "../assets/images/darkwater.jpg";
import detroitbasketball from "../assets/images/detroitbasketball.jpg";
import dohamuseum1 from "../assets/images/dohamuseum1.jpg";
import dohaport1 from "../assets/images/dohaport1.jpg";
import dohaport2 from "../assets/images/dohaport2.jpg";
import dohaport3 from "../assets/images/dohaport3.jpg";
import dohaport4 from "../assets/images/dohaport4.jpg";
import dubaiwalk from "../assets/images/dubaiwalk.jpg";
import elyanna1 from "../assets/images/elyanna1.jpg";

import elyanna2 from "../assets/images/elyanna2.jpg";
import firework from "../assets/images/firework.jpg";
import fujimag from "../assets/images/fujimag.jpg";
import fujimag2 from "../assets/images/fujimag2.jpg";
import griffithpeople from "../assets/images/griffithpeople.jpg";
import guypainting from "../assets/images/guypainting.jpg";
import jeddahsunset from "../assets/images/jeddahsunset.jpg";
import jonas1 from "../assets/images/jonas1.jpg";
import jonas2 from "../assets/images/jonas2.jpg";
import lacafe from "../assets/images/lacafe.jpg";
import lagrove from "../assets/images/lagrove.jpg";
import laguna from "../assets/images/laguna.jpg";
import lagunawalk from "../assets/images/lagunawalk.jpg";

import middlefinger from "../assets/images/middlefinger.jpg";
import nyccar from "../assets/images/nyccar.jpg";
import nycchinatown from "../assets/images/nycchinatown.jpg";
import nycman from "../assets/images/nycman.jpg";
import nycmansitting from "../assets/images/nycmansitting.jpg";
import oceanblue from "../assets/images/oceanblue.jpg";
import qatarflag from "../assets/images/qatarflag.jpg";
import skateboard from "../assets/images/skateboard.jpg";
import skateboardfloor from "../assets/images/skateboardfloor.jpg";
import soccer from "../assets/images/soccer.jpg";
import soccerguy from "../assets/images/soccerguy.jpg";
import sunsetgriffith from "../assets/images/sunsetgriffith.jpg";
const photos = [
  basketball,
  boatdoha,
  boatdubai,
  concertguy,
  darkwater,
  detroitbasketball,
  dohamuseum1,
  dohaport1,
  dohaport2,
  dohaport3,
  dohaport4,
  dubaiwalk,
  elyanna1,

  elyanna2,
  firework,
  fujimag,
  fujimag2,
  griffithpeople,
  guypainting,
  jeddahsunset,
  jonas1,
  jonas2,
  lacafe,
  lagrove,
  laguna,
  lagunawalk,

  middlefinger,
  nyccar,
  nycchinatown,
  nycman,
  nycmansitting,
  oceanblue,
  qatarflag,
  skateboard,
  skateboardfloor,
  soccer,
  soccerguy,
  sunsetgriffith,
];

const PhotographyPage = () => {
  return (
    <main className="bg-white px-8 md:px-10 py-10">
      <div className="flex flex-col gap-6 md:flex-row">
        <Sidebar />

        <section className="flex-1">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {[...photos]
              .sort(() => Math.random() - 0.5)
              .map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt=""
                  className="w-full mb-4 break-inside-avoid object-cover hover:opacity-95 transition"
                />
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default PhotographyPage;
