const express = require('express');
const router = express.Router();
const Quotes = require('../models/Quotes');

router.get('/allquotes', async (req, res) => {
    try {
        let allquotes = await Quotes.find({});
        res.status(200).json(allquotes);
    } catch (error) {
        console.error("Error fetching all quotes:", error);
        res.status(500).json({ success: false, msg: 'Something went wrong' });
    }
});

router.post('/addquotes', async (req, res) => {
    try {
        let { author, desc } = req.body;
        await Quotes.create({ author, desc });
        res.status(201).json({ success: true, msg: 'Quote added successfully' });
    } catch (error) {
        console.error("Error adding quote:", error);
        res.status(500).json({ success: false, msg: 'Internal server error in adding quote' });
    }
});

router.get('/quotes/:id', async (req, res) => {
    try {
        let { id } = req.params;
        const quote = await Quotes.findById(id);
        res.status(200).json(quote);
    } catch (error) {
        console.error("Error fetching quote by ID:", error);
        res.status(500).json({ success: false, msg: 'Internal server error in fetching quote' });
    }
});

router.delete('/quotes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).json({ success: false, message: "ID not found for deletion" });
        }
        const data = await Quotes.findByIdAndDelete(id);
        console.log(data);
        res.status(200).json({ success: true, message: "Quote deleted successfully", data });
    } catch (error) {
        console.error("Error deleting quote:", error);
        res.status(500).json({ success: false, message: "Internal server error in deleting quote" });
    }
});

module.exports = router;
