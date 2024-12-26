import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      title: "Drilling",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.",
    },
    {
      title: "Drilling",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.",
    },
    {
      title: "Tools",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-4xl font-bold text-[#2B5F0F] mb-8">
        SERVICES
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-[#2B5F0F] rounded-lg p-6 flex flex-col justify-between min-h-[250px] w-80"
          >
            <div>
              <h3 className="text-white text-2xl font-semibold mb-4 ">
                {service.title}
              </h3>
              <p className="text-white/80 mb-6 ">
                {service.description}
              </p>
            </div>
            <Button 
              variant="secondary" 
              className=" w-32 bg-white hover:bg-white/90 text-[#2B5F0F]"
            >
              Read More
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

