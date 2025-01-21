import React from "react";

const categories = [
  {
    title: "Berr Qodid (Plowing)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwZVQsQad06LgXk1wntG4Yp5SObHNLGzwgQ&", // Image link for plowing
  },
  {
    title: "Waraabinta (Irrigation)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwZVQsQad06LgXk1wntG4Yp5SObHNLGzwgQ&", // Image link for irrigation
  },
  {
    title: "Abuurka (Seeding)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwZVQsQad06LgXk1wntG4Yp5SObHNLGzwgQ&", // Image link for seeding
  },
  {
    title: "Fertiliyoonka (Fertilizers)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHjm_j6w-pqkk5wdxv9muNNH5hAqnyDQPTZY&s", // Image link for fertilizers
  },
  {
    title: "Alaabta Beerta (Garden Tools)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3EttJl6xF-MjwflB9JMj9tu3d5UPjS8JvPhM&s", // Image link for garden tools
  },
  {
    title: "Khadamka Xoolaha (Livestock Feed)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFybAqOwYOD9PFiAcq6ym8VeTqIcEdpVZhg&s", // Image link for livestock feed
  },
  {
    title: "Mashiinnada Beerta (Farm Machinery)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8loRgk9UJlGpMfVnaREXKmphE5ZoZE4Dqow&s", // Image link for farm machinery
  },
  {
    title: "Nidaamyada Biyaha (Water Systems)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrj8BhLBejeivbJ5tOHZjOF3oSptgE3hdH7Zc&s", // Image link for water systems
  },
];

const CategoriesGrid = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white p-4">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/tractor-field-ai-generated_268835-11230.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>

        <div className="relative container mx-auto py-20 px-4 lg:px-8 text-center mt-8">
          <h1 className="text-5xl font-extrabold mb-4 mt-10">Services</h1>
          <div className="text-lg font-medium flex justify-center items-center gap-2 mt-10">
            <span>Home</span>
            <span className="text-gray-300">{'>'}</span>
            <span className="text-gray-200">Adeegyada</span>
          </div>
        </div>
      </div>

      {/* Categories Grid Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md rounded-lg overflow-hidden border border-gray-300"
              >
                {/* Image Section */}
                <div className="w-full">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-green-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <h2 className="text-white text-center font-semibold text-lg">
                    {category.title}
                  </h2>
                </div>
                {/* Title (Visible by Default) */}
                <div className="absolute bottom-0 w-full bg-green-900 bg-opacity-75 p-3 text-center">
                  <h2 className="text-white font-semibold text-sm">
                    {category.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesGrid;
