"use client";

import { Form } from "@wandry/inertia-form";

import ChoiseboxField from "@/registry/wandry-ui/choisebox-field";
import SelectField from "@/registry/wandry-ui/select-field";
import TextareaField from "@/registry/wandry-ui/textarea-field";
import TextField from "@/registry/wandry-ui/text-field";
import DropzoneField from "@/registry/wandry-ui/dropzone-field";

// import {
//   MiniCalendar,
//   MiniCalendarDay,
//   MiniCalendarDays,
//   MiniCalendarNavigation,
// } from "@/components/kibo-ui/mini-calendar";
import { Button } from "@/components/ui/button";
// import {
//   Tags,
//   TagsContent,
//   TagsEmpty,
//   TagsGroup,
//   TagsInput,
//   TagsItem,
//   TagsList,
//   TagsTrigger,
//   TagsValue,
// } from "@/components/kibo-ui/tags";
import {
  CalendarIcon,
  ImageIcon,
  InfoIcon,
  MapPinIcon,
  TagIcon,
  UsersIcon,
} from "lucide-react";

const eventTypes = [
  {
    value: "conference",
    label: "Conference",
    description: "Professional gathering with speakers and networking",
  },
  {
    value: "workshop",
    label: "Workshop",
    description: "Hands-on learning experience with practical activities",
  },
  {
    value: "meetup",
    label: "Meetup",
    description: "Casual gathering for like-minded individuals",
  },
  {
    value: "webinar",
    label: "Webinar",
    description: "Online presentation or seminar via video conference",
  },
];

const venues = [
  { value: "convention-center", label: "Downtown Convention Center" },
  { value: "hotel-ballroom", label: "Grand Hotel Ballroom" },
  { value: "university-hall", label: "University Main Hall" },
  { value: "co-working-space", label: "Tech Hub Co-working Space" },
  { value: "online", label: "Online/Virtual" },
];

const availableTags = [
  "Technology",
  "Business",
  "Marketing",
  "Design",
  "Development",
  "AI/ML",
  "Startup",
  "Networking",
  "Education",
  "Innovation",
  "Remote Work",
  "Leadership",
];

const KiboUiForm = () => {
  return (
    <div className="not-prose mx-auto max-w-[530px] p-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 font-semibold text-3xl tracking-tight">
          Create Your Event
        </h1>
        <p className="text-balance text-muted-foreground">
          Fill out the form below to create and customize your upcoming event
        </p>
      </div>

      <Form action="/" className="space-y-8">
        {/* Basic Information */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <InfoIcon className="size-5" />
            Basic Information
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              name="event-name"
              label="Event Name"
              placeholder="Enter your event name"
            />
            <TextField
              name="organizer"
              label="Organizer"
              placeholder="Your name or organization"
            />
          </div>
          <div className="space-y-2">
            <TextareaField
              name="description"
              label="Description"
              placeholder="Describe your event in detail..."
            />
          </div>
        </div>

        {/* Event Type Selection */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <UsersIcon className="size-5" />
            Event Type
          </h2>
          <ChoiseboxField name="event_type" options={eventTypes} />
        </div>

        {/* Venue Selection */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <MapPinIcon className="size-5" />
            Venue
          </h2>
          <SelectField name="venue" options={venues} />
        </div>

        {/* Date Selection */}
        {/* <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <CalendarIcon className="size-5" />
            Select Date
          </h2>
          <MiniCalendar
            className="w-fit"
            days={7}
            onValueChange={setSelectedDate}
            value={selectedDate}
          >
            <MiniCalendarNavigation direction="prev" />
            <MiniCalendarDays>
              {(date) => (
                <MiniCalendarDay date={date} key={date.toISOString()} />
              )}
            </MiniCalendarDays>
            <MiniCalendarNavigation direction="next" />
          </MiniCalendar>
        </div> */}

        {/* Tags Selection */}
        {/* <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <TagIcon className="size-5" />
            Event Tags
          </h2>
          <Tags>
            <TagsTrigger>
              {selectedTags.map((tag) => (
                <TagsValue key={tag} onRemove={() => handleTagRemove(tag)}>
                  {tag}
                </TagsValue>
              ))}
            </TagsTrigger>
            <TagsContent>
              <TagsInput placeholder="Search tags..." />
              <TagsList>
                <TagsEmpty>No tags found.</TagsEmpty>
                <TagsGroup>
                  {availableTags
                    .filter((tag) => !selectedTags.includes(tag))
                    .map((tag) => (
                      <TagsItem key={tag} onSelect={() => handleTagSelect(tag)}>
                        {tag}
                      </TagsItem>
                    ))}
                </TagsGroup>
              </TagsList>
            </TagsContent>
          </Tags>
        </div> */}

        {/* File Upload */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <ImageIcon className="size-5" />
            Event Images
          </h2>
          <DropzoneField
            name="images"
            accept={{
              "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
            }}
            maxFiles={5}
            maxSize={5 * 1024 * 1024}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <Button type="submit">Create Event</Button>
        </div>
      </Form>
    </div>
  );
};

export default KiboUiForm;
