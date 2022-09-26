const Bookings = require("../models/bookingModel");
const PersonalDetails = require("../models/personalDetailModel");

const store = async (req, res) => {
  const personalId = await PersonalDetails.find({ userid: req.body.userId });
  const { userId, turfId, slotId } = req.body;
  let bookingData = { userId, turfId, slotId };
  bookingData.userId = personalId[0]._id;
  const booking = new Bookings(bookingData);
  try {
    const data = await booking.save();
    return data;
  } catch (err) {
    return err;
  }
};
