const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  fatherFullName: {
    type: String,
    required: true,
  },
  motherFullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  parentsPhoneNumber: {
    type: String,
    required: true,
  },
  slcRollNumber: {
    type: String,
    required: true,
  },
  slcPassedYear: {
    type: Number,
    required: true,
  },
  securedScore: {
    type: Number,
    required: true,
  },
  marksheet: {
    data: Buffer,
    contentType: String,
  },
  characterCertificate: {
    data: Buffer,
    contentType: String,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
