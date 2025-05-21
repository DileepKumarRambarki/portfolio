const Experience=({role,company,desc})=>{
    return (
        <div className="exp-card">
          <h2>{role}</h2>
          {/* <img src={image} alt={title} /> */}
          <head>{company}</head>
          <div className="desc">
           {desc}
          </div>
        </div>
      );
    
}
export default Experience