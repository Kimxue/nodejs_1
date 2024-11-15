
import mongoose from "mongoose"
const Schema = mongoose.Schema

const userSchema = new Schema({
    title: { type: String, require: true },
    describe: { type: String },
    status: { type: String,},
    Duedate: { type: Number },
    numberoftask: { type: Number,}
});

const User = mongoose.model("user", userSchema)
const usersData = [
    {
        title: "JavaScript",
        describe: "Complete JavaScript tutorials",
        status: "Done",
        Duedate: 20241026,
        numberoftask: 30
    },
    {
        title: "CSS",
        describe: "Practice CSS layouts",
        status: "Pending",
        Duedate: 20241027,
        numberoftask: 25
    },
    {
        title: "React",
        describe: "Complete React documentation",
        status: "In Progress",
        Duedate: 20241101,
        numberoftask: 40
    },
    {
        title: "Exam",
        describe: "Study for final exams",
        status: "Pendding",
        Duedate: 20241110,
        numberoftask: 50
    },
    {
        title: "Meeting",
        describe: "Weekly project review meeting",
        status: "Pending",
        Duedate: 20241028,
        numberoftask: 10
    },
    {
        title: "Book",
        describe: "Read 'Clean Code' by Robert C. Martin",
        status: "Pendding",
        Duedate: 20241105,
        numberoftask: 15
    },
    {
        title: "Workout",
        describe: "Daily workout session",
        status: "Done",
        Duedate: 20241025,
        numberoftask: 5
    },
    {
        title: "Post",
        describe: "Write a blog on JavaScript closures",
        status: "Pendding",
        Duedate: 20241107,
        numberoftask: 20
    },
    {
        title: "Tutorial",
        describe: "Watch tutorial on MongoDB",
        status: "Pending",
        Duedate: 20241103,
        numberoftask: 30
    },
    {
        title: "Code Review",
        describe: "Review code for team project",
        status: "Done",
        Duedate: 20241026,
        numberoftask: 45
    }
];

// // Thêm nhiều người dùng vào MongoDB
// User.insertMany(usersData)
//     .then(() => {
//         console.log("10 users added successfully");
//           // Đóng kết nối sau khi thêm xong
//     })
//     .catch((error) => {
//         console.error("Error adding users:", error);
//         mongoose.connection.close();
//     });

export default User;