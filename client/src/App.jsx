import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // ข้อ 1: สร้าง State สำหรับเก็บคำค้นหา เพื่อให้พิมพ์ใน Input ได้
  const [searchText, setSearchText] = useState("");
  
  // ข้อ 2: สร้าง State สำหรับเก็บรายการที่ได้จากการค้นหา เพื่อนำไปแสดงผล
  const [trips, setTrips] = useState([]);

  // ฟังก์ชันดึงข้อมูลจาก API (หัวใจของข้อ 2: ค้นหาและแสดงรายการที่เกี่ยวข้อง)
  const fetchTrips = async () => {
    try {
      // ส่งค่าจาก searchText ไปที่ Server ผ่าน query parameter 'keywords'
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${searchText}`
      );
      // นำข้อมูลที่ได้จาก Server (response.data.data) มาเก็บไว้ใน trips state
      setTrips(response.data.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  // ดึงข้อมูลใหม่ทุกครั้งที่ searchText เปลี่ยน (เพื่อให้ข้อ 1 และ 6 ทำงานแบบ Real-time)
  useEffect(() => {
    fetchTrips();
  }, [searchText]);

  return (
    <div className="App">
      <h1 className="main-title">เที่ยวไหนดี</h1>

      <div className="search-container">
        <label>ค้นหาสถานที่ท่องเที่ยว</label>
        {/* ข้อ 1: Input ที่ผู้ใช้งานพิมพ์ค้นหาได้ โดยผูกค่า (value) และการเปลี่ยนแปลง (onChange) เข้ากับ State */}
        <input
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="trip-list">
        {/* ข้อ 2: วนลูป (map) เพื่อแสดงรายการสถานที่ท่องเที่ยวที่เกี่ยวข้อง */}
        {trips.map((trip) => (
          <div key={trip.eid} className="trip-card">
            
            <div className="image-container">
              {/* ข้อ 3: แสดงรูปภาพหลักของสถานที่ โดยดึงมาจาก property 'photos' อินเด็กซ์ที่ 0 */}
              <img src={trip.photos[0]} alt={trip.title} className="main-img" />
            </div>

            <div className="trip-detail">
              {/* ข้อ 4: ชื่อสถานที่ท่องเที่ยวเป็นลิงก์ (<a>) โดยดึง URL มาจาก property 'url' */}
              <a href={trip.url} target="_blank" rel="noreferrer" className="trip-link">
                <h2 className="trip-title">{trip.title}</h2>
              </a>
              
              <p className="description">
                {trip.description.substring(0, 100)}...
              </p>
              
              {/* ข้อ 4: ลิงก์เพิ่มเติมในส่วน 'อ่านต่อ' โดยใช้ property 'url' เช่นกัน */}
              <a href={trip.url} target="_blank" rel="noreferrer" className="read-more">
                อ่านต่อ
              </a>

              <div className="tags-container">
                <span className="tag-label">หมวด </span>
                {/* ข้อ 5: วนลูปแสดงหมวดหมู่ (Tags) ของแต่ละสถานที่ท่องเที่ยว */}
                {trip.tags.map((tag, index) => (
                  <span key={index}>
                    {/* ข้อ 6: เมื่อกดที่หมวดหมู่ จะนำชื่อหมวดหมู่นั้น (tag) ไปตั้งค่าใน setSearchText เพื่อทำการค้นหาใหม่ทันที */}
                    <button className="tag-button" onClick={() => setSearchText(tag)}>
                      {tag}
                    </button>
                    {index < trip.tags.length - 1 && index !== trip.tags.length - 2 && " "}
                    {index === trip.tags.length - 2 && " และ "}
                  </span>
                ))}
              </div>

              {/* ข้อ 3: แสดงรูปภาพย่อยอื่นๆ ที่เหลือจาก property 'photos' (ข้ามรูปแรกไป) */}
              <div className="sub-images">
                {trip.photos.slice(1).map((photo, index) => (
                  <img key={index} src={photo} alt="sub" className="sub-img" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;