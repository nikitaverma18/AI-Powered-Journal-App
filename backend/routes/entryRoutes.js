const express = require('express');
const Entry = require('../models/Entry');
const axios = require('axios');
//const analyzeContent = require('../utils/gemini');
const router = express.Router();

const analyzeMood = async (text) => {
    try {
      const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key', 
        {text},
       {
        headers: {
          'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`
        }
      });

      return response.data.mood;
    } catch (error) {
      console.error('Error analyzing content:', error);
      return 'Neutral';
    }
  };
  
  
router.post('/add', async (req, res) => {
  // console.log(add);
  
    const { text} = req.body;
    const mood = await analyzeMood(text);
    const newEntry = new Entry({
      text,
      mood,
      timestamp: new Date(),
    })

    try{
    await newEntry.save();
    res.status(200).json(newEntry);
    }catch(error){
      console.error('Error adding entry:', error)
        res.status(500).json({ message: 'Error adding entry'});
    }
});

router.get('/', async (req, res) => {
    try {
      const entries = await Entry.find();
      res.status(200).json(entries);
    } catch (err) {
      console.error('Error fetching entries:', error);
      res.status(500).json({ message: 'Error fetching entries'});
    }
  });

router.delete('/:id', async (req, res) => {
    try {
      const entry = await Entry.findByIdAndDelete(req.params.id);
      if(!entry) return res.status(404).json({message: 'Entry not found'});
      res.status(200).json({ message: 'Entry deleted successfully' });
    } catch (error) {
      console.error('Error deleting entry:', error);
      res.status(500).json({ message: 'Error deleting entry'});
    }
  });
  

router.put('/:id', async (req, res) => {
    const { text} = req.body;
    const mood = await analyzeMood(text);
    try {
      const entry = await Entry.findByIdAndUpdate(
        req.params.id,
        {text, mood},
        {new: true}
      );
      if (!entry) return res.status(404).json({message: 'Entry not found'});
      res.status(200).json(entry);
    } catch (error) {
      console.error('Error editing entry:', error)
      res.status(500).json({ message: 'Error updating entry'});
    }
  });

module.exports = router;