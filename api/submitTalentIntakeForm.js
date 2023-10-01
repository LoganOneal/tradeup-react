const { talentIntakeTable } = require('./utils/_airtable');

export default async (req, res) => {
    const { firstName, lastName, phoneNumber, email } = req.body.formData;
    console.log("BODY", req.body);
    try {
        await talentIntakeTable.create([{ fields: { firstName, lastName, phoneNumber, email } }]);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};