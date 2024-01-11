import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Textarea } from "@/components/ui/textarea"
import { Input } from "../ui/input"
import React, { useState } from 'react';
import { Button } from "../ui/button";

interface FormData {
  inputText: string;
}

const Post: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ inputText: '' });
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();
  
    //   // Perform client-side validation
    //   if (!formData.inputText.trim()) {
    //     alert('Input text cannot be empty!');
    //     return;
    //   }
  
    //   // Submit the content
    //   console.log('Submitted content:', formData.inputText);
    //   setFormData({ inputText: '' });

    // };
  return (
    <div className="py-2">
        <Dialog>
        <DialogTrigger className='w-full'>
        <div className="flex justify-between items-end">
            <Input
            type="text"
            name="inputText"
            value={formData.inputText}
            onChange={handleInputChange}
            className="h-10 rounded-lg bg-white"
            placeholder={`${'Yael Adamson'} share some progress`}
            autoComplete="off"
            />
        </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Made some progress?</DialogTitle>
            <DialogDescription>
                Be sure to share them with your colleagues.
            </DialogDescription>
            <Textarea />

            <Button>Post</Button>
            </DialogHeader>
        </DialogContent>
        </Dialog>
        
    </div>
  )
}

export default Post