"use client";
import * as React from "react";
import TextField from "../../text-field";

const Page = (props) => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-lg font-semibold text-foreground">
          Apply for early access
        </h3>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            <TextField
              name="first_name"
              label="First name"
              autoComplete="given-name"
              placeholder="Emma"
            />

            <TextField
              name="last_name"
              label="Last name"
              autoComplete="family-name"
              placeholder="Crown"
            />

            <TextField
              name="last_name"
              label="Work email"
              autoComplete="family-name"
              placeholder="Crown"
            />

            <div className="col-span-full">
              <Label htmlFor="email" className="font-medium">
                Work email<span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="emma@company.com"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="company" className="font-medium">
                Company
              </Label>
              <Input
                type="text"
                id="company"
                name="company"
                autoComplete="organization"
                placeholder="Company, Inc."
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <Label htmlFor="size" className="font-medium">
                Company size (employees)
              </Label>
              <Select defaultValue="">
                <SelectTrigger id="size" name="size" className="mt-2">
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-9">1-9</SelectItem>
                  <SelectItem value="10-50">10-50</SelectItem>
                  <SelectItem value="50-250">50-250</SelectItem>
                  <SelectItem value="250+">250+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator className="col-span-full my-4" />
            <div className="col-span-full">
              <Label className="font-semibold text-foreground block mb-4">
                Select a workspace package
              </Label>

              <RadioGroup
                className="grid grid-cols-1 sm:grid-cols-3 gap-5"
                defaultValue={selectedWorkspace.id.toString()}
                onValueChange={(value) =>
                  setSelectedWorkspace(
                    workspaces.find(
                      (workspace) => workspace.id.toString() === value
                    ) || workspaces[0]
                  )
                }
              >
                {workspaces.map((item) => (
                  <div
                    key={item.id.toString()}
                    className="border-input has-data-[state=checked]:border-ring relative flex flex-col gap-2 rounded-md border p-4 shadow-xs outline-none"
                  >
                    <div className="flex justify-between">
                      <RadioGroupItem
                        id={item.id.toString()}
                        value={item.id.toString()}
                        className="order-1 after:absolute after:inset-0"
                      />

                      <Label
                        htmlFor={item.id.toString()}
                        className="block text-sm font-medium text-foreground"
                      >
                        {item.title}
                      </Label>
                    </div>
                    <div className="flex flex-col h-full justify-between">
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <span className="mt-4 block text-sm font-medium text-foreground">
                        {item.users}
                      </span>
                    </div>
                  </div>
                ))}
              </RadioGroup>

              <p className="mt-6 text-xs text-muted-foreground">
                <sup>1</sup> $0.5/10K requests after limit reach.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                <sup>2</sup> No credit card required for registration.
              </p>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex items-center justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              className="whitespace-nowrap"
            >
              Go back
            </Button>
            <Button type="submit" className="whitespace-nowrap">
              Apply
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
