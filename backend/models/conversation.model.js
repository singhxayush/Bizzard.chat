import mongoose from "mongoose";
import User from "./user.model";

const conversationSchema = new mongoose.Schema(
    {
        participants: [
            {
                type: mongoose.Schema.Types.ObjectID,
                ref: "User",
            }
        ],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectID,
                ref: "Message",
                default: [],
            }
        ]
    }
)