const Contact = () => (
  <div>
   <h1 className="font-bold m-3 p-3 text-3xl">Contact Us Page</h1>
   <form>
    <input type="text" placeholder="Name" className="border border-black m-2 p-2"/>
    <input type="text" placeholder="Message" className="border border-black m-2 p-2"/>
    <button className="border border-black m-2 p-2 rounded-lg bg-orange-300">Submit</button>


   </form>
  </div>
);

export default Contact;
