const Student = require("../../model/Student/Registration");

// Controller function for student registration
const registerStudent = async (req, res) => {
    console.log(req.body);
  try {
    // Extract the student data from the request body
    const {
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      fatherFullName,
      motherFullName,
      phoneNumber,
      parentsPhoneNumber,
      slcRollNumber,
      slcPassedYear,
      securedScore,
    } = req.body;

    // Create a new instance of the Student model
    const student = new Student({
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      fatherFullName,
      motherFullName,
      phoneNumber,
      parentsPhoneNumber,
      slcRollNumber,
      slcPassedYear,
      securedScore,
    });


    if (req.files && req.files.marksheet) {
      const marksheetFile = req.files.marksheet;

      student.marksheet.data = marksheetFile.data;
      student.marksheet.contentType = marksheetFile.mimetype;
    }


    if (req.files && req.files.characterCertificate) {
      const certificateFile = req.files.characterCertificate;


      student.characterCertificate.data = certificateFile.data;
      student.characterCertificate.contentType = certificateFile.mimetype;
    }


    const savedStudent = await student.save();

    res.status(201).json({ success: true, data: savedStudent });
  } catch (error) {
    console.error("Error in registering student:", error);
    res.status(500).json({ success: false, error: "Failed to register student" });
  }
};

module.exports = { registerStudent };
