import "../assets/css/blog.css";
import { useNavigate } from "react-router-dom";
import Day1 from "../assets/img/day1.jpg";
import Day2 from "../assets/img/day2.jpg";
import Day3 from "../assets/img/day3.jpg";
import Day4 from "../assets/img/day4.jpg";
import Day5 from "../assets/img/day5.jpg";
import Day6 from "../assets/img/day6.jpg";
import Day7 from "../assets/img/day7.jpg";
import Day1Pic1 from "../assets/img/day1Pic1.jpg";
import Day1Pic7 from "../assets/img/day1Pic2.jpg";
import Day1Pic2 from "../assets/img/day1Pic3.jpg";
import Day1Pic3 from "../assets/img/day1Pic4.jpg";
import Day1Pic4 from "../assets/img/day1Pic5.jpg";
import Day1Pic5 from "../assets/img/day1Pic6.jpg";
import Day1Pic6 from "../assets/img/day1Pic7.jpg";
import Day1Pic8 from "../assets/img/day1Pic8.jpg";
import Day2Pic1 from "../assets/img/day2Pic1.jpg";
import Day2Pic7 from "../assets/img/day2Pic2.jpg";
import Day2Pic2 from "../assets/img/day2Pic3.jpg";
import Day2Pic3 from "../assets/img/day2Pic4.jpg";
import Day2Pic4 from "../assets/img/day2Pic5.jpg";
import Day2Pic5 from "../assets/img/day2Pic6.jpg";
import Day2Pic6 from "../assets/img/day2Pic7.jpg";
import Day2Pic8 from "../assets/img/day2Pic8.jpg";
import Day3Pic1 from "../assets/img/day3Pic1.jpg";
import Day3Pic7 from "../assets/img/day3Pic2.jpg";
import Day3Pic2 from "../assets/img/day3Pic3.jpg";
import Day3Pic3 from "../assets/img/day3Pic4.jpg";
import Day3Pic4 from "../assets/img/day3Pic5.jpg";
import Day3Pic5 from "../assets/img/day3Pic6.jpg";
import Day3Pic6 from "../assets/img/day3Pic7.jpg";
import Day3Pic8 from "../assets/img/day3Pic8.jpg";
import Day4Pic1 from "../assets/img/day4Pic1.jpg";
import Day4Pic7 from "../assets/img/day4Pic2.jpg";
import Day4Pic2 from "../assets/img/day4Pic3.jpg";
import Day4Pic3 from "../assets/img/day4Pic4.jpg";
import Day4Pic4 from "../assets/img/day4Pic5.jpg";
import Day4Pic5 from "../assets/img/day4Pic6.jpg";
import Day4Pic6 from "../assets/img/day4Pic7.jpg";
import Day4Pic8 from "../assets/img/day4Pic8.jpg";
import Day5Pic1 from "../assets/img/day5Pic1.jpg";
import Day5Pic7 from "../assets/img/day5Pic2.jpg";
import Day5Pic2 from "../assets/img/day5Pic3.jpg";
import Day5Pic3 from "../assets/img/day5Pic4.jpg";
import Day5Pic4 from "../assets/img/day5Pic5.jpg";
import Day5Pic5 from "../assets/img/day5Pic6.jpg";
import Day5Pic6 from "../assets/img/day5Pic7.jpg";
import Day5Pic8 from "../assets/img/day5Pic8.jpg";
import Day6Pic1 from "../assets/img/day6Pic1.jpg";
import Day6Pic7 from "../assets/img/day6Pic2.jpg";
import Day6Pic2 from "../assets/img/day6Pic3.jpg";
import Day6Pic3 from "../assets/img/day6Pic4.jpg";
import Day6Pic4 from "../assets/img/day6Pic5.jpg";
import Day6Pic5 from "../assets/img/day6Pic6.jpg";
import Day6Pic6 from "../assets/img/day6Pic7.jpg";
import Day6Pic8 from "../assets/img/day6Pic8.jpg";
import Day7Pic1 from "../assets/img/day7Pic1.jpg";
import Day7Pic3 from "../assets/img/day7Pic2.jpg";
import Day7Pic2 from "../assets/img/day7Pic3.jpg";


function Blog({ darkMode }) {
  const navigate = useNavigate();

  const blogData = [
    {
      images: [Day1, Day1Pic1, Day1Pic2, Day1Pic3, Day1Pic4, Day1Pic5, Day1Pic6, Day1Pic7, Day1Pic8],
      day: "Day 1",
      agenda: "We visited Luneta Park, admired the Rizal Fountain, and explored the city on a tour.",
      date: "April 07, 2025",
      introduction: "During our recent trip to Manila, we had the chance to immerse ourselves in the city's rich historical and cultural heritage. We visited iconic landmarks that hold significant meaning in Philippine history, including Luneta Park, the Rizal Fountain, and Plaza de Armas. These places offered a fascinating glimpse into the past, with beautiful scenery and deep cultural relevance that made the visit unforgettable.",
      experience: "Our visit to Luneta Park was a memorable one, where we admired the Rizal Fountain, a symbol of the nation's respect for Dr. Jose Rizal, the country's national hero. The fountain, surrounded by lush greenery, added a serene touch to the atmosphere, and we couldn't help but feel the profound history that resonated in the air. Afterward, we explored the city, making our way to Plaza de Armas, a historic site that provided an impressive view of the city's colonial past. The beauty and serenity of these places left us in awe, offering both a peaceful retreat and a meaningful connection to the country's heritage."
    },{
      images: [Day2, Day2Pic1, Day2Pic2, Day2Pic3, Day2Pic4, Day2Pic5, Day2Pic6, Day2Pic7, Day2Pic8],
      day: "Day 2",
      agenda: "We visited the Port of Subic Bay and the Subic Bay Exhibition and Convention Center.",
      date: "April 08, 2025",
      introduction: "During our trip, we had the opportunity to explore two significant landmarks in Subic Bay—the Port of Subic Bay and the Subic Bay Exhibition and Convention Center. These places are integral to the region’s economy and development, offering insight into both commercial activities and cultural events.",
      experience: "At the Port of Subic Bay, we witnessed the bustling activities of one of the country’s most vital ports, known for its strategic location and modern infrastructure. It was fascinating to learn about the operations that keep the port running smoothly. Later, we visited the Subic Bay Exhibition and Convention Center, where we saw the venue’s impressive facilities designed to host international events. It was exciting to be in a place that not only caters to business and trade but also showcases the region's capacity to host large-scale conventions and exhibitions. This visit gave us a deeper appreciation of Subic Bay’s role in both the local and global economy."
    },{
      images: [Day3, Day3Pic1, Day3Pic2, Day3Pic3, Day3Pic4, Day3Pic5, Day3Pic6, Day3Pic7, Day3Pic8],
      day: "Day 3",
      agenda: "We visited Quezon Memorial Circle and the National Museum of Natural History.",
      date: "April 09, 2025",
      introduction: "Our trip took us to two significant and enriching destinations in Manila — the Quezon Memorial Circle and the National Museum of Natural History. Both places offer a unique glimpse into Philippine history, culture, and natural heritage, making them ideal spots for learning and reflection.",
      experience: "At the Quezon Memorial Circle, we explored the monument dedicated to President Manuel L. Quezon and enjoyed the peaceful atmosphere of the surrounding park. Later, at the National Museum of Natural History, we were amazed by the diverse exhibits showcasing the country’s rich biodiversity, from preserved wildlife to fascinating geological displays. The trip was both educational and enjoyable, leaving us with a deeper appreciation of the Philippines' natural and historical treasures."
    },{
      images: [Day4, Day4Pic1, Day4Pic2, Day4Pic3, Day4Pic4, Day4Pic5, Day4Pic6, Day4Pic7, Day4Pic8],
      day: "Day 4",
      agenda: "We visited Hytec Power Inc. and Bangko Sentral ng Pilipinas as part of our educational trip.",
      date: "April 10, 2025",
      introduction: "As part of our educational trip, we had the opportunity to visit important institutions in Metro Manila, including the Bangko Sentral ng Pilipinas (BSP) and Hytec Power Inc. These visits gave us a deeper understanding of the country’s financial system and technological advancements.",
      experience: "During our visit to the Bangko Sentral ng Pilipinas, we learned about how the country's currency is produced and how the economy is managed. Unfortunately, taking pictures inside the facility was not allowed, so I was unable to capture any photos during our visit. Afterward, we went to Hytec Power Inc., where we explored various technologies and equipment related to train management and operations in Manila. It was a very informative and exciting experience that helped us see how both finance and technology play vital roles in the country’s progress."
    },{
      images: [Day5, Day5Pic1, Day5Pic2, Day5Pic3, Day5Pic4, Day5Pic5, Day5Pic6, Day5Pic7, Day5Pic8],
      day: "Day 5",
      agenda: "We visited the LRT and the MMDA to learn more about Manila’s transportation and traffic management systems.",
      date: "April 11, 2025",
      introduction: "As part of our educational tour, we had the opportunity to visit key institutions that play a major role in Manila’s transportation system — the Light Rail Transit (LRT) and the Metropolitan Manila Development Authority (MMDA).",
      experience: "During our visit to the LRT, we learned about the operations behind Manila’s railway system and saw how trains are managed and maintained to serve thousands of commuters daily. It was fascinating to understand the coordination required to keep the system running smoothly. At the MMDA, we were given insights into how traffic is monitored and managed across the city. We also saw how technology and strategic planning come together to ensure public safety and efficient transportation flow. The experience gave us a deeper appreciation for the people working behind the scenes to make travel safer and more organized."
    },{
      images: [Day6, Day6Pic1, Day6Pic2, Day6Pic3, Day6Pic4, Day6Pic5, Day6Pic6, Day6Pic7, Day6Pic8],
      day: "Day 6",
      agenda: "We visited Baguio and explored The Mansion, PMA, Strawberry Farm, and Bell Church.",
      date: "April 12, 2025",
      introduction: "Our journey to Baguio was filled with excitement as we visited some of the city's most well-known attractions. Known as the Summer Capital of the Philippines, Baguio welcomed us with its cool breeze, scenic views, and peaceful atmosphere.",
      experience: "During our trip, we explored The Mansion House, admired its grand architecture, and enjoyed the calm surroundings. We also visited the Philippine Military Academy (PMA), where we saw the impressive grounds and learned about the country's future military leaders. At the Strawberry Farm, we appreciated the vast fields and the fresh air, even though we didn’t try strawberry picking. Lastly, we visited the Bell Church, where the intricate designs and serene environment gave us a glimpse of Baguio’s cultural richness. It was a wonderful experience filled with sightseeing and meaningful memories."
    },{
      images: [Day7, Day7Pic1, Day7Pic2, Day7Pic3],
      day: "Day 7",
      agenda: "We went to Burnham Park before heading back to the dorm.",
      date: "April 13, 2025",
      introduction: "During our stay in Baguio, we made sure to visit Burnham Park, one of the city's most well-known and historic public parks. Known for its wide open spaces, beautiful gardens, and recreational areas, Burnham Park serves as a relaxing escape in the heart of Baguio. It was the perfect destination for unwinding after a day of exploring the city’s landmarks.",
      experience: "Our visit to Burnham Park was refreshing and enjoyable. We walked around the park, admired the scenic lake, and appreciated the peaceful atmosphere filled with fresh mountain air. Some of us rented bikes while others simply sat and relaxed under the trees. It was a calm and soothing moment that gave us time to reflect on the day’s experiences. As the sun began to set, we made our way back to the dorm, feeling relaxed and grateful for the opportunity to enjoy such a serene place in Baguio."
    }
  ];

  return (
    <div className="blogContainer">
      <div className="subBlogContainer">
        <div className={`titleContainer ${darkMode ? "dark" : "light"}`}>
          <p>Blog Post</p>
        </div>

        <div className={`subTitleContainer ${darkMode ? "dark" : "light"}`}>
          <p>Our educational tour gave us a deeper understanding of important institutions, history, and technology, making it a truly memorable and insightful experience.</p>
        </div>

        <div className="blogPostContainer">
          {blogData.map((post, index) => (
            <div
              key={index}
              className={`subBlogPostContainer ${darkMode ? "dark" : "light"}`}
              onClick={() => navigate("/blogModal", { state: post })}
            >
              <div className="blogPictureContainer">
                <img className="blogPicture" src={post.images[0]} alt={post.day} />
              </div>

              <div className={`blogTitleContainer ${darkMode ? "dark" : "light"}`}>
                <p>{post.day}</p>
              </div>

              <div className={`blogDescriptionContainer ${darkMode ? "dark" : "light"}`}>
                <p>{post.agenda}</p>
              </div>

              <div className="blogDateContainer">
                <div className={`subBlogDateContainer ${darkMode ? "dark" : "light"}`}>
                  <p>{post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
