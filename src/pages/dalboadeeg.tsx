import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

 function ServiceRequest() {
  return (
    <div className="min-h-screen bg-black/60 relative flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('https://www.teraganix.com/cdn/shop/articles/seed-germination.png?v=1709913316g')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-12 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4">
            <h1 className="text-5xl font-bold mb-6">Dalbo Adeeg</h1>
            <p className="text-lg opacity-90">
Hadii aad u baahntahay adeeg lagu qabto, waxaad si degdeg ah u soo gudbin kartaa codsi adeeg adiga oo isticmaalaya foomka hoose. Si fudud u geli macluumaadka hantidaada, waxaana kula soo xiriiri doona farsamayaqaan adeeg si loo qorsheeyo booqashada oo loo go’aamiyo talaabooyinka xiga            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="Magacaaga Gali" 
                  className="bg-gray-50"
                />
                <Input 
                  placeholder="Number kaaga Gali" 
                  className="bg-gray-50"
                />
              </div>

              <Textarea 
                placeholder="Gooddaada..." 
                className="min-h-[100px] bg-gray-50"
              />

              <div className="grid grid-cols-2 gap-4">
                <Input 
                  type="date"
                  placeholder="Start Date"
                  className="bg-gray-50"
                />
                <Input 
                  type="date"
                  placeholder="End Date"
                  className="bg-gray-50"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#2B5F0F] hover:bg-[#234d0c] text-white"
              >
                End Date
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceRequest