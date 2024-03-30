import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
    minLength: [3, "Title must contain at least 3 Characters!"],
    maxLength: [30, "Title cannot exceed 30 Characters!"],
  },
  companyName: {
    type: String,
    required: [true, "Please provide a company name."],
  },
  country: {
    type: String,
    required: [true, "Please provide a country name."],
  },
  city: {
    type: String,
    required: [true, "Please provide a city name."],
  },
  location: {
    type: String,
    required: [true, "Please provide location."],
    minLength: [20, "Location must contian at least 20 characters!"],
  },
  jobType: {
    type: String,
    required: [true, "Please provide a job type."],
    enum: ['Full-time', 'Part-time', 'Freelance', 'Internship'],
  },
  experience: {
    type: String,
    required: [true, "Please provide experience."],
    enum: ['Entry-level', 'Mid-level', 'Senior', 'Executive'],
},
  industry: {
    type: String,
    required: [true, "Please provide an industry."],
  },
  description: {
    type: String,
    required: [true, "Please provide decription."],
    minLength: [30, "Description must contain at least 30 Characters!"],
    maxLength: [500, "Description cannot exceed 500 Characters!"],
  },
  responsibilities: {
    type: String,
    required: [true, "Please provide responsibilities."],
  },
  qualifications: {
    type: String,
    required: [true, "Please provide qualifications."],
  },
  benefits: {
    type: String,
    required: [true, "Please provide benefits."],
  },
  category: {
    type: String,
    required: [true, "Please provide a category."],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Salary must contain at least 4 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "Salary must contain at least 4 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "Salary must contain at least 4 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  applicationDeadline: {
    type: Date,
    required: [true, "Please provide an application deadline."],
  },
  contactInformation: {
    type: String,
    required: [true, "Please provide contact information."],
  },
  companyOverview: {
    type: String,
    required: [true, "Please provide a company overview."],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema); 