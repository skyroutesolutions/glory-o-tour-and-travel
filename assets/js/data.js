const blogsData = [
  {
      image: "assets/images/blog/1.jpg",
      category: "Travel Tips",
      readTime: "5 min read",
      author: "Glory O Travels",
      title: "Exploring the Wonders of France: A Traveler's Guide",
      description: "Discover the best tips and destinations for your next adventure to France.",
      link: "blog-detail.html"
  },
  {
      image: "assets/images/blog/2.jpg",
      category: "Corporate Travel",
      readTime: "6 min read",
      author: "Glory O Travels",
      title: "How to Plan Corporate Trips with Ease",
      description: "Learn how Glory O Travels ensures seamless corporate travel experiences.",
      link: "blog-detail.html"
  },
  {
      image: "assets/images/blog/3.jpg",
      category: "Destinations",
      readTime: "7 min read",
      author: "Glory O Travels",
      title: "Top 5 Must-Visit Spots in Italy",
      description: "A curated list of the most breathtaking destinations in Italy for travelers.",
      link: "blog-detail.html"
  },
  {
      image: "assets/images/blog/4.jpg",
      category: "Travel Stories",
      readTime: "5 min read",
      author: "Glory O Travels",
      title: "Customer Story: From Lagos to London",
      description: "Read about Lemo Daniel’s unforgettable journey from Lagos to London.",
      link: "blog-detail.html"
  },
  {
      image: "assets/images/blog/5.jpg",
      category: "Discounts & Offers",
      readTime: "4 min read",
      author: "Glory O Travels",
      title: "How to Maximize Discounts and Advance Payment Options",
      description: "Explore special offers available exclusively with Glory O Travels.",
      link: "blog-detail.html"
  },
  {
      image: "assets/images/blog/6.jpg",
      category: "Flight Tips",
      readTime: "5 min read",
      author: "Glory O Travels",
      title: "Flying to Australia? Here's What You Need to Know",
      description: "Prepare for your trip to Australia with these essential travel tips.",
      link: "blog-detail.html"
  },
  {
      image: "assets/images/blog/7.jpg",
      category: "Travel Insights",
      readTime: "6 min read",
      author: "Glory O Travels",
      title: "Why Business Travel is More Important",
      description: "Discover why corporate and business travel remains a key priority in 2025.",
      link: "blog-detail.html"
  },
  {
      image: "assets/images/blog/8.jpg",
      category: "Travel News",
      readTime: "5 min read",
      author: "Glory O Travels",
      title: "Latest Updates on Travel to Canada",
      description: "Stay informed about recent developments for travelers heading to Canada.",
      link: "blog-detail.html"
  },
  {
      image: "assets/images/blog/9.jpg",
      category: "Tour Packages",
      readTime: "5 min read",
      author: "Glory O Travels",
      title: "Affordable Tour Packages to Spain",
      description: "Check out our exclusive packages for a memorable trip to Spain.",
      link: "blog-detail.html"
  }
];

const blogsOverviewContainer = document.getElementById("blogs-grid-overview");

if(blogsOverviewContainer) {
  let blogHTML = "";
blogsData.splice(6).forEach((blog) => {
    blogHTML += `
        <div class="group relative overflow-hidden">
            <div class="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                <img src="${blog.image}" class="group-hover:scale-110 group-hover:rotate-3 duration-500" alt="">
                <div class="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                    <span class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">${blog.category}</span>
                </div>
            </div>
            <div class="mt-6">
                <div class="flex mb-4">
                    <span class="flex items-center text-slate-400 text-sm">
                        <i data-feather="clock" class="size-4 text-slate-900 dark:text-white me-1.5"></i>${blog.readTime}
                    </span>
                    <span class="text-slate-400 text-sm ms-3">by <a href="#" class="text-slate-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 font-medium">${blog.author}</a></span>
                </div>
                <a href="${blog.link}" class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">${blog.title}</a>
                <p class="text-slate-400 mt-2">${blog.description}</p>
                <div class="mt-3">
                    <a href="${blog.link}" class="hover:text-red-500 inline-flex items-center">Read More 
                        <i data-feather="chevron-right" class="size-4 ms-1"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
  });
  blogsOverviewContainer.innerHTML = blogHTML;

// Initialize feather icons if needed
if (window.feather) {
    feather.replace();
}
}

const blogContainer = document.getElementById("blogs-grid");

if(blogContainer) {
  let blogHTML = "";
blogsData.forEach((blog) => {
    blogHTML += `
        <div class="group relative overflow-hidden">
            <div class="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                <img src="${blog.image}" class="group-hover:scale-110 group-hover:rotate-3 duration-500" alt="">
                <div class="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                    <span class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">${blog.category}</span>
                </div>
            </div>
            <div class="mt-6">
                <div class="flex mb-4">
                    <span class="flex items-center text-slate-400 text-sm">
                        <i data-feather="clock" class="size-4 text-slate-900 dark:text-white me-1.5"></i>${blog.readTime}
                    </span>
                    <span class="text-slate-400 text-sm ms-3">by <a href="#" class="text-slate-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 font-medium">${blog.author}</a></span>
                </div>
                <a href="${blog.link}" class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">${blog.title}</a>
                <p class="text-slate-400 mt-2">${blog.description}</p>
                <div class="mt-3">
                    <a href="${blog.link}" class="hover:text-red-500 inline-flex items-center">Read More 
                        <i data-feather="chevron-right" class="size-4 ms-1"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
  });
  blogContainer.innerHTML = blogHTML;

// Initialize feather icons if needed
if (window.feather) {
    feather.replace();
}
}

// Tour packages data
const tourPackages = [
  {
      id: 1,
      image: "assets/images/listing/1.jpg",
      location: "Dubai",
      title: "Cuba Sailing Adventure",
      rating: 5.0,
      reviews: 30,
      price: "$58 / Day",
      discount: "10% Off",
      link: "tour-detail-one.html?id=1",
      detailedDescription: "Set sail across the clear blue waters of Cuba in this exciting sailing adventure. Explore hidden coves, pristine beaches, and vibrant coral reefs. This is the perfect trip for sailing enthusiasts looking for adventure on the high seas."
  },
  {
      id: 2,
      image: "assets/images/about1.jpg",
      location: "Italy",
      title: "Tour in New York",
      rating: 5.0,
      reviews: 30,
      price: "$58 / Day",
      link: "tour-detail-one.html?id=2",
      detailedDescription: "Experience the bustling streets of New York City in this all-inclusive tour. From iconic landmarks like the Statue of Liberty to world-class museums, this package covers all the must-see attractions in the city that never sleeps."
  },
  {
      id: 3,
      image: "assets/images/listing/3.jpg",
      location: "Maldivas",
      title: "Discover Greece",
      rating: 5.0,
      reviews: 30,
      price: "$58 / Day",
      link: "tour-detail-one.html?id=3",
      detailedDescription: "Immerse yourself in the rich history and culture of Greece, from the ancient ruins of Athens to the idyllic islands. This tour takes you through Greece’s historic sites and charming coastal villages, making it a perfect vacation for culture and beach lovers alike."
  },
  {
      id: 4,
      image: "assets/images/listing/4.jpg",
      location: "USA",
      title: "Museum of Modern Art",
      rating: 5.0,
      reviews: 30,
      price: "$58 / Day",
      link: "tour-detail-one.html?id=4",
      detailedDescription: "Explore the vast collection of modern art at the Museum of Modern Art (MoMA) in New York City. This tour will take you through one of the world’s most impressive collections of contemporary art, featuring works by Picasso, Van Gogh, and more."
  },
  {
      id: 5,
      image: "assets/images/listing/5.jpg",
      location: "Bali",
      title: "Peek Mountain View",
      rating: 5.0,
      reviews: 30,
      price: "$58 / Day",
      link: "tour-detail-one.html?id=5",
      detailedDescription: "Get ready for a breathtaking experience with a panoramic view from the peak of Bali’s most famous mountain. This package offers a guided trek to the summit for an unforgettable sunrise experience."
  },
  {
      id: 6,
      image: "assets/images/listing/6.jpg",
      location: "Bangkok",
      title: "Hot Balloon Journey",
      rating: 5.0,
      reviews: 30,
      price: "$58 / Day",
      discount: "25% Off",
      link: "tour-detail-one.html?id=6",
      detailedDescription: "Take flight on a hot air balloon over the vibrant city of Bangkok. Experience a bird’s-eye view of the bustling city below, with serene views of the surrounding landscapes during your peaceful ascent."
  }
];

// Render function
function renderTourPackages() {
  const container = document.getElementById("tour-packages-container");

  if(container){
    tourPackages.forEach((pkg) => {
      // Create package HTML
      const packageHTML = `
          <div class="group rounded-md shadow dark:shadow-gray-700">
              <div class="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                  <img src="${pkg.image}" class="scale-125 group-hover:scale-100 duration-500" alt="">
                  ${pkg.discount ? `<div class="absolute top-0 start-0 p-4">
                      <span class="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">${pkg.discount}</span>
                  </div>` : ""}
                  <div class="absolute top-0 end-0 p-4">
                      <a href="javascript:void(0)" class="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500">
                          <i class="mdi mdi-heart text-[20px] align-middle"></i>
                      </a>
                  </div>
              </div>
              <div class="p-4">
                  <p class="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" class="size-4 text-red-500 me-2 mt-1"></i> ${pkg.location}</p>
                  <a href="${pkg.link}" class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">${pkg.title}</a>
                  <div class="flex items-center mt-2">
                      <span class="text-slate-400">Rating:</span>
                      <ul class="text-lg font-medium text-amber-400 list-none ms-2">
                          ${Array(pkg.rating)
                              .fill(`<li class="inline"><i class="mdi mdi-star align-middle"></i></li>`)
                              .join("")}
                          <li class="inline text-black dark:text-white text-sm">${pkg.rating} (${pkg.reviews})</li>
                      </ul>
                  </div>
                  <div class="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                      <h5 class="text-lg font-medium text-red-500">${pkg.price}</h5>
                      <a href="${pkg.link}" class="text-slate-400 hover:text-red-500">Explore Now <i class="mdi mdi-arrow-right"></i></a>
                  </div>
              </div>
          </div>`;
      
      // Append to container
      container.innerHTML += packageHTML;
  });
  }
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", renderTourPackages);


const tourDetailContainer = document.getElementById("tour-detail");

if(tourDetailContainer) {
  const urlParams = new URLSearchParams(window.location.search);
  const tourId = urlParams.get("id");
  const selectedTour = tourPackages.find((tour) => tour.id == tourId);

  if(selectedTour) {
    document.getElementById("tour-name").textContent = selectedTour.title;
    document.getElementById("tour-image").src = selectedTour.image;
    document.getElementById("tour-title").textContent = selectedTour.title;
    document.getElementById("tour-location").textContent = selectedTour.location;
    document.getElementById("tour-price").textContent = selectedTour.price;
    document.getElementById("tour-description").textContent = selectedTour.detailedDescription;
  }
}