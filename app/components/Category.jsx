import axios from "axios";
import { URL } from "../Utils";
import Link from "next/link";
const Category = async () => {
  const response = await axios.get(`${URL}/api/categories?populate=*`);

  // const [category, setCategory] = useState([]);

  // useEffect(() => {
  //   fetchCategory();
  // }, []);

  // const fetchCategory = async () => {
  //   try {
  //     const response = await axios.get(`${URL}/api/categories?populate=*`);
  //     setCategory(response.data.data); // Ensure you're accessing the correct data path
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  return (
    <section id="services-2" className="services-2 section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Welcome to Sofa</h2>
        <p>The UK&apos;s number one destination for statement neutral sofas.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          {response.data.data.length > 0 ? (
            response.data.data.map((cat) => (
              <div
                className="col-xl-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="200"
                key={cat.id} // Ensure unique key for each item
              >
                {console.log("resss", cat.attributes.slug)}
                <div className="service-item" style={{ position: "relative" }}>
                  <Link
                    href={`/categoryProduct/${cat.attributes.slug}`}
                    className="stretched-link"
                  >
                    <div className="img">
                      <img
                        src={`${URL}${cat.attributes.image.data.attributes.url}`}
                        // src={
                        //   cat.attributes.image.data.attributes.url ||
                        //   "assets/img/default.png"
                        // } // Handle image if it exists
                        className="img-fluid"
                        alt={cat.attributes.name || "Category Image"}
                      />
                    </div>
                    <div className="details position-relative">
                      <h3>{cat.attributes.name}</h3>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;
