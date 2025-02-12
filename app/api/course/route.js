import dbConnect from "@/dbConfig/dbConnect";
import { Course } from "@/models/course.model";
import { NextResponse } from "next/server";

export async function GET()
{
    try
    {
        await dbConnect();
        const courses = await Course.find({});
        if(!courses)
            throw new Error('Courses not found');
        return NextResponse.json(courses);
    }
    catch(error)
    {
        throw error;
    }
}