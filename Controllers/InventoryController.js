const Inventory = require("../models/Inventory");

exports.createInventoryItem = async (req, res) => {
  try {
    const inventoryItem = new Inventory(req.body);
    await inventoryItem.save();
    res.status(201).json(inventoryItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getInventoryItems = async (req, res) => {
  try {
    const inventoryItems = await Inventory.find();
    res.json(inventoryItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getInventoryItemById = async (req, res) => {
  try {
    const inventoryItem = await Inventory.findById(req.params.id);
    if (!inventoryItem) return res.status(404).json({ error: "Inventory item not found" });
    res.json(inventoryItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateInventoryItem = async (req, res) => {
  try {
    const inventoryItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(inventoryItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteInventoryItem = async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.json({ message: "Inventory item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
