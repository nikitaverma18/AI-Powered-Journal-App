const express = require('express');
const Journal = require('../models/journalModel');
const { analyzeSentiment } = require('../AI-Journal-Conn/sentimentAnalysis');
const router = express.Router();

// GET all journals............................................................

router.get('/', async (req, res) => {
    try {
      const journals = await Journal.find();
      res.json(journals);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  // POST new journal entry.............................................................

  router.post('/', async (req, res) => {
    const { content } = req.body;
    try {
      const sentiment = await analyzeSentiment(content);
      const journal = new Journal({ content, sentiment });
      await journal.save();
      res.status(201).json(journal);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  // PUT (Edit) an existing journal entry................................................................

  router.put('/:id', async (req, res) => {
    const { content } = req.body;
    try {
      const sentiment = await analyzeSentiment(content);
      const updatedJournal = await Journal.findByIdAndUpdate(
        req.params.id,
        { content, sentiment },
        { new: true }
      );
      res.json(updatedJournal);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  //( DELETE a journal entry).............................................................................

  router.delete('/:id', async (req, res) => {
    try {
      await Journal.findByIdAndDelete(req.params.id);
      res.status(200).send('Journal entry deleted');
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  module.exports = router;