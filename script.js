//creating a root
const root = ReactDOM.createRoot(document.getElementById("root"));



//creating nav bar
// creating the li tags of navbar -home,about,service,contact us
const homeli = React.createElement("li", { id: "home", style: { color: "white", width: "25%" } }, "Home");
const aboutli = React.createElement("li", { id: "about", style: { color: "white", width: "25%" } }, "About");
const serviceli = React.createElement("li", { id: "service", style: { color: "white", width: "25%" } }, "Service");
const contactusli = React.createElement("li", { id: "contact_us", style: { color: "white", width: "25%" } }, "Contact us");

//ul tag where the li tags have been inserted
const navul = React.createElement("ul", { style: { listStyleType: "none", width: "100%", backgroundColor: "black", display: "flex" } }, [homeli, aboutli, serviceli, contactusli]);
// the nav tag where ul is stored
const nav = React.createElement("nav", { style: { height: "50px", width: "100%", display: "flex" } }, [navul]);


// creating table
//thead table head
const th1 = React.createElement("th", {}, "Name");
const th2 = React.createElement("th", {}, "Age");
const th3 = React.createElement("th", {}, "Gender");

//tr table head
const trhead = React.createElement("tr", {}, [th1, th2, th3]);
const tablehead = React.createElement("thead", {
    style: {
        backgroundColor: "aqua", textAlign: "left", fontSize: "30px"
    }
}, [trhead]);

//table body tbody
//first row elements - td table data
const tdname1= React.createElement("td",{},"Hulk");
const tdage1= React.createElement("td",{},"20");
const tdgender1 = React.createElement("td", {}, "Male");
// first row consists 3 td table data
const tr1 = React.createElement("tr", {}, [tdname1, tdage1, tdgender1]);

//second row elements - td table data
const tdname2= React.createElement("td",{},"WonderWoman");
const tdage2= React.createElement("td",{},"20");
const tdgender2 = React.createElement("td", {}, "Female");
// second row consists 3 td table data
const tr2 = React.createElement("tr", {}, [tdname2, tdage2, tdgender2]);

//third row elements - td table data
const tdname3= React.createElement("td",{},"IronMan");
const tdage3= React.createElement("td",{},"25");
const tdgender3 = React.createElement("td", {}, "Male");
// third row consists 3 td
const tr3 = React.createElement("tr", {}, [tdname3, tdage3, tdgender3]);

const tableBody = React.createElement("tbody", {
    style: { backgroundColor: "yellow", textAlign: "center", fontSize: "25px" }
}, [tr1, tr2, tr3]);
const table = React.createElement("table", {
    style: {
        align: "center", height: "300px", width: "70%"
    }
}, [tablehead, tableBody]);

const elements = React.createElement("div", { id: "container" }, [nav, table]);
root.render(elements);