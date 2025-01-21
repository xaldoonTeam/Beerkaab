import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
function WhyUsSection() {
  return (
    <section className="py-10 px-24 -mt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Image */}
          <div className="relative max-w-2xl aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="https://p.w3layouts.com/demos_new/template_demo/09-09-2021/agrowfarm-liberty-demo_Free/974977506/web/assets/images/a6.jpg"
              alt="Farmer working with wheelbarrow"
              className="w-full h-fill  object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8 m">
            <div className="space-y-4 mt-20">
              <span className="text-[#FF8A00]  font-medium uppercase">
                MAXAA NOOGA DOORANAYSAA
              </span>
              <h2 className="text-4xl font-bold text-gray-900 ">
                Kobcinta Cunnooyinka Caafimaadka Leh
              </h2>
              <p className="text-gray-600 leading-relaxed ">
                Waxaan diiradda saarnaa koritaanka iyo soo saarista cuntooyin caafimaad leh, iyadoo aan la isticmaalin wax sun ah. Waxaan ku dadaalnaa in aan bixino cuntooyin caafimaad leh oo ka yimaada beero dabiici ah.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Organic Solutions Circular Progress */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={85}
                    text={`${85}%`}
                    styles={buildStyles({
                      textColor: "#325E56",
                      pathColor: "#325E56",
                      trailColor: "#E0E0E0",
                    })}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Xalka Dabiiciga ah</h3>
                  <p className="text-gray-600">
                    Waxaan bixinaa xalal dabiici ah oo waxtar leh, iyadoo aan la isticmaalin wax kiimikooyin waxyeello leh, si loo gaaro koritaanka beeraha caafimaadka leh.
                  </p>
                </div>
                <Link to='/Dalboadeeg'>
                <Button className="px-8 -ml-32 mt-10 hover:text-white rounded-2xl hover:bg-[#3d746a]  py-3 bg-green font-semibold text-xl text-white bg-[#325E56]  transition-all">
Learn More                </Button>
              </Link>
              </div>

              {/* Quality Agriculture Circular Progress */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={95}
                    text={`${95}%`}
                    styles={buildStyles({
                      textColor: "#325E56",
                      pathColor: "#325E56",
                      trailColor: "#E0E0E0",
                    })}
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold">Tayada Beeraha</h3>
                  <p className="text-gray-600">
                    Beeraha aan ka shaqeyno waxay leedahay tayo sare, iyadoo la hubinayo in ay soo saaraan cuntooyin nadiif ah oo kharashkoodu yahay mid macquul ah.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
