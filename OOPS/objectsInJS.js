let bioData = {
    name : "Lakshay",
    age : 22,
    school : {
        sname : "MAAPS",
        loc : {
            district : "North West Delhi",
            state : "Delhi"
        }
    },
    getData(){
        console.log(`${bioData.name} and ${bioData.age} goes to ${bioData.school.sname} at ${bioData.school.loc.district}, ${bioData.school.loc.state}`);
    }
}

bioData.getData();
