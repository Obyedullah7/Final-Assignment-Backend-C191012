const Entry = require("../models/entryModel");

const addEntry = async (req, res) => {
    try {

        const {title, value, type, category} = req.body;

        const newEntry = new Entry({
            title,
            value,
            type,
            category
        })

        await newEntry.save()

        res.json({
            success: true,
            message: "Entry added successfully",
            entry: newEntry
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }

}

const getEntries = async (req, res) => {
    try {
        const entries = await Entry.find()

        res.json({
            success: true,
            message: "Entries fetched successfully",
            entries
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = { addEntry, getEntries };