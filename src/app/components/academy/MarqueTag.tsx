export default function MarqueTag() {
    return (
      <>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');`}
        </style>
        <div className="overflow-hidden bg-blue-600 text-[#ffff] ">
          <div
            className="marquee whitespace-nowrap text-[20px] py-3"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <span className="z-0">Empowering the future by equipping learners with essential skills and knowledge to drive innovation, solve real-world challenges, and lead the ever-evolving landscape of technology.</span>
          </div>
        </div>
      </>
    );
  }
  