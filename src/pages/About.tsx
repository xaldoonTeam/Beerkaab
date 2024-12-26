import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

 function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b  ">
      <div
        className="w-full bg-cover bg-center py-40 text-center relative"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/aerial-view-tractor-applying-chemicals-large-green-field-concept-agricultural-practices-crop-spraying-farm-machinery-precision-agriculture-field-management_864588-221171.jpg?w=1060')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-5xl font-bold relative z-10">About US</h1>
      </div>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-green-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Isku Xiraha Beeraleyda iyo Khubarada Qalabka Beerta            </h2>
            <p className="mt-6 text-xl text-gray-500">
            "Boggan waxaa loogu talagalay in uu noqdo meel isku xira beeraleyda doonaya inay kobciyaan wax-soosaarkooda iyo dadka aqoonta gaarka ah u leh qalabka beerta. Hadafkeenna waa inaan fududeyno wada shaqeynta iyo isdhaafsiga macluumaadka, si beeraleydu u helaan qalabkii saxda ahaa iyo hagid ay ku horumariyaan tacabkooda. Adiga oo ah beeraley, waxaad ka heli kartaa xalal waxtar leh, halka khubarada qalabka beerta ay halkan ku wadaagaan aqoontooda iyo adeegyo tayo leh."            </p>
            <div className="mt-8">
              <Button size="lg" className=" bg-green-90">Learn More</Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="/placeholder.svg"
              alt="Team working together"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Jane Doe", role: "CEO & Founder", image: "/placeholder.svg" },
              { name: "John Smith", role: "CTO", image: "/placeholder.svg" },
              { name: "Emily Johnson", role: "Lead Designer", image: "/placeholder.svg" },
            ].map((member) => (
              <Card key={"member.name"}>
                <CardContent className="p-6">
                  <img
                    src={"member.image"}
                    alt={"member.name"}
                    width={300}
                    height={300}
                    className="rounded-full mx-auto"
                  />
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{"member.name"}</h3>
                  <p className="text-gray-500">{"member.role"}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage