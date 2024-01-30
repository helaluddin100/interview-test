import { useState } from "react";
import "./style.css";

function App() {
// State to store selected values, name, and checkbox value
const [selectedValues, setSelectedValues] = useState([]);

// Handler for select change
const handleSelectChange = (event) => {
  // Get selected options from the event
  const selectedOptions = Array.from(
    event.target.selectedOptions,
    (option) => parseInt(option.value, 10)
  );

  // Update the state with selected values
  setSelectedValues(selectedOptions);
};
const [inputField, setInputField] = useState({
name:'',
checkbox:''
})

const inputsHandler = e => {
  e.persist()
  setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
  })
}

const handleSubmit = (event) => {
  event.preventDefault();

  // Destructure values from inputField
  const { name, checkbox } = inputField;

  // Do something with the selected values, name, and checkbox
  console.log("Name:", name);
  console.log("Selected Sectors:", selectedValues);
  console.log("Agree to terms:", checkbox);
};

  return (
    <>
      <div className="sectors">
        <div className="container">
          <div className="row d-flex algin-items-center justify-content-center">
            <div className="col-md-5">
              <form onSubmit={handleSubmit}>
                <div className="form-wrapper">
                  <h3>
                    Please enter your name and pick the Sectors you are
                    currently involved in.
                  </h3>
                  <div className="input-fiuld-item">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-controler"
                      placeholder="Enter your Name"
                      value={inputField.name}
                      onChange={inputsHandler}
                    />
                  </div>
                  <div className="input-fiuld-item">
                    <label htmlFor="name">Sectors:</label>
                    <select multiple size="5"  onChange={handleSelectChange} value={selectedValues}>
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.indent
                            ? "\u00A0".repeat(option.indent * 4)
                            : ""}
                          {option.text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex algin-items-center gap-2">
                  <input
                      type="checkbox"
                      id="agree"
                      name="checkbox"
                      checked={inputField.checkbox}
                      onChange={inputsHandler}
                    />
                    <label htmlFor="agree">Agree to terms</label>
                  </div>
                  <button className="form-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


const options = [
  { value: 1, text: 'Manufacturing' },
  { value: 19, text: 'Construction materials', indent: 1 },
  { value: 18, text: 'Electronics and Optics', indent: 1 },
  { value: 6, text: 'Food and Beverage', indent: 1 },
  { value: 342, text: 'Bakery & confectionery products', indent: 2 },
  { value: 43, text: 'Beverages', indent: 2 },
  { value: 42, text: 'Fish & fish products', indent: 2 },
  { value: 40, text: 'Meat & meat products', indent: 2 },
  { value: 39, text: 'Milk & dairy products', indent: 2 },
  { value: 437, text: 'Other', indent: 2 },
  { value: 378, text: 'Sweets & snack food', indent: 2 },
  { value: 13, text: 'Furniture' },
  { value: 389, text: 'Bathroom/sauna', indent: 1 },
  { value: 385, text: 'Bedroom', indent: 1 },
  { value: 390, text: 'Children’s room', indent: 1 },
  { value: 98, text: 'Kitchen', indent: 1 },
  { value: 101, text: 'Living room', indent: 1 },
  { value: 392, text: 'Office', indent: 1 },
  { value: 394, text: 'Other (Furniture)', indent: 1 },
  { value: 341, text: 'Outdoor', indent: 1 },
  { value: 99, text: 'Project furniture', indent: 1 },
  { value: 12, text: 'Machinery' },
  { value: 94, text: 'Machinery components', indent: 1 },
  { value: 91, text: 'Machinery equipment/tools', indent: 1 },
  { value: 224, text: 'Manufacture of machinery', indent: 1 },
  { value: 97, text: 'Maritime', indent: 1 },
  { value: 271, text: 'Aluminium and steel workboats', indent: 2 },
  { value: 269, text: 'Boat/Yacht building', indent: 2 },
  { value: 230, text: 'Ship repair and conversion', indent: 2 },
  { value: 93, text: 'Metal structures', indent: 1 },
  { value: 508, text: 'Other', indent: 1 },
  { value: 227, text: 'Repair and maintenance service', indent: 1 },
  { value: 11, text: 'Metalworking' },
  { value: 67, text: 'Construction of metal structures', indent: 1 },
  { value: 263, text: 'Houses and buildings', indent: 1 },
  { value: 267, text: 'Metal products', indent: 1 },
  { value: 542, text: 'Metal works', indent: 1 },
  { value: 75, text: 'CNC-machining', indent: 2 },
  { value: 62, text: 'Forgings, Fasteners', indent: 2 },
  { value: 69, text: 'Gas, Plasma, Laser cutting', indent: 2 },
  { value: 66, text: 'MIG, TIG, Aluminum welding', indent: 2 },
  { value: 9, text: 'Plastic and Rubber' },
  { value: 54, text: 'Packaging', indent: 1 },
  { value: 556, text: 'Plastic goods', indent: 1 },
  { value: 559, text: 'Plastic processing technology', indent: 1 },
  { value: 55, text: 'Blowing', indent: 2 },
  { value: 57, text: 'Moulding', indent: 2 },
  { value: 53, text: 'Plastics welding and processing', indent: 2 },
  { value: 560, text: 'Plastic profiles', indent: 1 },
  { value: 5, text: 'Printing' },
  { value: 148, text: 'Advertising', indent: 1 },
  { value: 150, text: 'Book/Periodicals printing', indent: 1 },
  { value: 145, text: 'Labelling and packaging printing', indent: 1 },
  { value: 7, text: 'Textile and Clothing' },
  { value: 44, text: 'Clothing', indent: 1 },
  { value: 45, text: 'Textile', indent: 1 },
  { value: 8, text: 'Wood' },
  { value: 337, text: 'Other (Wood)', indent: 1 },
  { value: 51, text: 'Wooden building materials', indent: 1 },
  { value: 47, text: 'Wooden houses', indent: 1 },
  { value: 3, text: 'Other' },
  { value: 37, text: 'Creative industries' },
  { value: 29, text: 'Energy technology' },
  { value: 33, text: 'Environment' },
  { value: 2, text: 'Service' },
  { value: 25, text: 'Business services' },
  { value: 35, text: 'Engineering' },
  { value: 28, text: 'Information Technology and Telecommunications' },
  { value: 581, text: 'Data processing, Web portals, E-marketing', indent: 1 },
  { value: 576, text: 'Programming, Consultancy', indent: 1 },
  { value: 121, text: 'Software, Hardware', indent: 1 },
  { value: 122, text: 'Telecommunications', indent: 1 },
  { value: 22, text: 'Tourism' },
  { value: 141, text: 'Translation services', indent: 1 },
  { value: 21, text: 'Transport and Logistics' },
  { value: 111, text: 'Air', indent: 1 },
  { value: 114, text: 'Rail', indent: 1 },
  { value: 112, text: 'Road', indent: 1 },
  { value: 113, text: 'Water', indent: 1 },
];