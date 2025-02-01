import getData from "./sync.js";
import { option, option1 } from "./sync.js";
let api = "http://localhost:3000/data";

async function get() {
  try {
    let { data } = await axios.get(api);
    getData(data);
  } catch (error) {
    console.log(error);
  }
}

//delete

async function deleteUser(id) {
  try {
    await axios.delete(`${api}/${id}`);
    get();
  } catch (error) {
    console.log(error);
  }
}

//Add

async function add(userNew) {
  try {
    let { data } = await axios.post(api, userNew);
    get();
  } catch (error) {
    console.log(error);
  }
}

//Edit

async function editUser(id, userUpdated) {
  try {
    await axios.put(`${api}/${id}`, userUpdated);
    get();
  } catch (error) {
    console.log(error);
  }
}

// filtet

option.onclick = async (element) => {
  let value = option.value;
  try {
    if (value == "Active") {
      let { data } = await axios.get(`${api}?status=${true}`);
      getData(data);
    } else if (value == "Inactive") {
      let { data } = await axios.get(`${api}?status=${false}`);
      getData(data);
    } else if (value == "All") {
      get();
    }
  } catch (error) {
    console.log(error);
  }
};

option1.onclick = async (element) => {
  let value = option1.value;
  try {
    if (value == "Miami") {
      let { data } = await axios.get(`${api}?city=${"Miami"}`);
      getData(data);
    } else if (value == "Los Angeles") {
      let { data } = await axios.get(`${api}?city=${"Los Angeles"}`);
      getData(data);
    } else if (value == "Chicago") {
      let { data } = await axios.get(`${api}?city=${"Chicago"}`);
      getData(data);
    } else if (value == "New York") {
      let { data } = await axios.get(`${api}?city=${"New York"}`);
      getData(data);
    } else if (value == "All") {
      get();
    }
  } catch (error) {
    console.log(error);
  }
};

//Search

async function search(search) {
  try {
    let { data } = await axios.get(`${api}?name=${search}`);
    getData(data);
  } catch (error) {
    console.log(error);
  }
}

// cheakbox
async function Cheack(el) {
  try {
    let { data } = await axios.put(`${api}/${el.id}`, {
      ...el,
      status: !el.status,
    });
    get();
    dialogEdit.close();
  } catch (error) {
    console.log(error);
  }
}

export { Cheack };
export { search };
export { editUser };
export { deleteUser };
export { add };
export default get;
