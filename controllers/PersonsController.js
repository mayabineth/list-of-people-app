import Person from "../models/Person.js";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const createPerson = async (req, res) => {
  const { name } = req.body;
  const findName = await Person.findOne({ name });
  if (!findName) {
    const resGender = await axios(`${process.env.GENDER_API}${name}`).catch(
      (err) => console.log(err)
    );
    const resNation = await axios(`${process.env.NATION_API}${name}`).catch(
      (err) => console.log(err)
    );
    if (resGender && resNation) {
      //gender
      const { gender, probability: genderProbability } = resGender.data;

      //nation
      const dataNation = resNation.data.country;
      const max = Math.max(...dataNation.map((o) => o.probability));
      const { country_id: nationality, probability: nationalityProbability } =
        dataNation.find((o) => o.probability === max);

      const person = await Person.create({
        name,
        gender,
        genderProbability,
        nationality,
        nationalityProbability,
      });
      res.status(201).json({ person });
    }
  }
};
const getPersons = async (req, res) => {
  const allPersons = await Person.find({});
  res.status(200).json({ allPersons });
};

export { createPerson, getPersons };
