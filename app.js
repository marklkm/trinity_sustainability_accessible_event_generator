// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.getElementById("submitBtn").addEventListener("click", function () {
  const eventName = document.getElementById("eventName").value;
  const eventDescription = document.getElementById("eventDescription").value;
  const eventLocation = document.getElementById("eventLocation").value;
  const organiserName = document.getElementById("organiserName").value;
  const organiserEmail = document.getElementById("organiserEmail").value;
  const eventStartTime = document.getElementById("eventStartTime").value;
  const eventEndTime = document.getElementById("eventEndTime").value;
  const eventStartDate = document.getElementById("eventStartDate").value;
  const eventEndDate = document.getElementById("eventEndDate").value;
  const onlineEvent = document.querySelector(
    'input[name="onlineEvent"]:checked'
  ).value;
  const eventRecording = document.querySelector(
    'input[name="eventRecording"]:checked'
  ).value;
  const inpersonEvent = document.querySelector(
    'input[name="inpersonEvent"]:checked'
  ).value;
  const eventAccess = document.querySelector(
    'input[name="eventAccess"]:checked'
  ).value;
  const seatingFacilities = document.querySelector(
    'input[name="seatingFacilities"]:checked'
  ).value;
  const wheelchairToilets = document.querySelector(
    'input[name="wheelchairToilets"]:checked'
  ).value;
  const hearingLoop = document.querySelector(
    'input[name="hearingLoop"]:checked'
  ).value;
  const islInt = document.querySelector('input[name="islInt"]:checked').value;
  const accessRequirements = document.querySelector(
    'input[name="accessRequirements"]:checked'
  ).value;
  const eventParking = document.querySelector(
    'input[name="eventParking"]:checked'
  ).value;
  const quietSpace = document.querySelector(
    'input[name="quietSpace"]:checked'
  ).value;
  const sensoryEnvironment = document.querySelector(
    'input[name="sensoryEnvironment"]:checked'
  ).value;
  const sensoryInfo = document.querySelector(
    'input[name="sensoryInfo"]:checked'
  ).value;
  const eventSlides = document.querySelector(
    'input[name="eventSlides"]:checked'
  ).value;
  const eventVideo = document.querySelector(
    'input[name="eventVideo"]:checked'
  ).value;
  const singleUseItems = document.querySelector(
    'input[name="singleUseItems"]:checked'
  ).value;
  const zeroWaste = document.querySelector(
    'input[name="zeroWaste"]:checked'
  ).value;
  const veggieApproach = document.querySelector(
    'input[name="veggieApproach"]:checked'
  ).value;
  const glutenFree = document.querySelector(
    'input[name="glutenFree"]:checked'
  ).value;
  const transport = document.querySelector(
    'input[name="transport"]:checked'
  ).value;
  const sustainableSourced = document.querySelector(
    'input[name="sustainableSourced"]:checked'
  ).value;
  const promoteAwareness = document.querySelector(
    'input[name="promoteAwareness"]:checked'
  ).value;
  const comments =
    document.getElementById("comments").value ||
    "No additional comments provided";
  const contacts =
    document.getElementById("contacts").value ||
    "No additional contact details provided";
  // ... Fetch other fields similarly ...

  if (
    !eventName ||
    !eventDescription ||
    !eventLocation ||
    !organiserName ||
    !eventStartTime ||
    !eventEndTime ||
    !eventStartDate ||
    !eventEndDate ||
    !onlineEvent ||
    !eventRecording ||
    !inpersonEvent ||
    !eventAccess
  ) {
    alert("Please fill out all required fields.");
  } else {
    alert("Form submitted successfully!");
  }

  const output = `
        Event Name: ${eventName}
        Event Description: ${eventDescription}
        Event Location: ${eventLocation}
        Event Organiser name: ${organiserName}
        Event Organiser email: ${organiserEmail}
        Event Start Time: ${eventStartTime}
        Event End Time: ${eventEndTime}
        Event Start Date: ${eventStartDate}
        Event End Date: ${eventEndDate}
        Online Event: ${onlineEvent}
        Event Recording ${eventRecording}
        In-Person Event: ${inpersonEvent}
        Is the event accessible? ${eventAccess}
        Is seating available at the event? ${seatingFacilities} 
        Wheelchair accessible toilet: ${wheelchairToilets}
        Hearing Loop Availability: ${hearingLoop}
        Irish Sign Language (ISL) Interpretation Availability? ${islInt}
        Accessibility Requirements: ${accessRequirements}
        Disabled Person's Parking Availability: ${eventParking}
        Are there provisions for a designated quiet space? ${quietSpace}
        Have you made provisions to create a sensory-friendly environment? ${sensoryEnvironment}
        Is event information, instructions, and communications clear, concise, and provided in multiple formats? ${sensoryInfo}
        Are the presentation slides accessible? ${eventSlides}
        Does the event include a video showing or video call? ${eventVideo}
        Will single use items be available at the event? ${singleUseItems}
        Will the event be a zero waste event? ${zeroWaste}
        Gluten free options availability: ${glutenFree}
        Will the event take a veggie first approach? ${veggieApproach}
        Will you promote public transport and active travel (walking and cycling) to your event? ${transport}
        Are products and services procured for the event sustainably sourced or produced? ${sustainableSourced}
        Will the event promote sustainability awareness and education among attendees? ${promoteAwareness}
        Any further comments or details? ${comments}
        Please provide contact details for any access enquiries (if not included elsewhere): ${contacts}
    `;

  document.getElementById("output").innerText = output;
});

(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.getElementById("copyBtn").addEventListener("click", function () {
  const output = document.getElementById("output");
  const textArea = document.createElement("textarea");
  textArea.value = output.innerText; // Use innerText or textContent to avoid copying HTML tags
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Event details copied to clipboard!");
});

document.getElementById("pdfBtn").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const output = document.getElementById("output").innerText;

  // Handle image upload
  const imageInput = document.getElementById("eventImage");
  const file = imageInput.files[0];

  const lineHeight = 10; // Height of a single line in the PDF
  const pageHeight = doc.internal.pageSize.height; // Get page height of the PDF
  const marginTop = 10; // Top margin
  const marginBottom = 10; // Bottom margin
  const textWidth = 180; // Max width for the text lines (A4 width - margins)
  let yPosition = 20; // Starting y position for the text

  if (file && file.type === "image/png") {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imgData = event.target.result;

      // Add image to the top of the PDF (x: 10, y: 10, width: 180mm, height: proportional to image)
      doc.addImage(imgData, "PNG", 10, marginTop, 180, 80); // Adjust the size if needed

      // Set yPosition to just below the image
      yPosition = 100;

      // Add "Event Details" heading after the image
      doc.setFontSize(22);
      doc.text("Event Details", 10, yPosition);

      // Increase yPosition to leave space after the heading
      yPosition += 20;

      // Set font size for the body text
      doc.setFontSize(14);

      // Split the text to fit into the page width
      const lines = doc.splitTextToSize(output, textWidth); // 180 is the max width of lines in mm

      // Loop through each line and add text, handling page breaks if necessary
      for (let i = 0; i < lines.length; i++) {
        if (yPosition + lineHeight > pageHeight - marginBottom) {
          // Add a new page if the text goes beyond the page height
          doc.addPage();
          yPosition = marginTop; // Reset yPosition for the new page
        }
        doc.text(lines[i], 10, yPosition);
        yPosition += lineHeight; // Move yPosition down for the next line
      }

      // Save the PDF with the event details and image
      doc.save("event-details.pdf");
    };
    reader.readAsDataURL(file);
  } else {
    // If no image is uploaded, just print the text
    const lines = doc.splitTextToSize(output, textWidth);

    // Add "Event Details" heading
    doc.setFontSize(22);
    doc.text("Event Details", 10, yPosition);
    yPosition += 20;

    doc.setFontSize(14);

    // Loop through each line and add text, handling page breaks if necessary
    for (let i = 0; i < lines.length; i++) {
      if (yPosition + lineHeight > pageHeight - marginBottom) {
        doc.addPage();
        yPosition = marginTop; // Reset yPosition for the new page
      }
      doc.text(lines[i], 10, yPosition);
      yPosition += lineHeight;
    }

    // Save the PDF
    doc.save("event-details.pdf");
  }
});

document.getElementById("emailBtn").addEventListener("click", function () {
  const output = document.getElementById("output").innerText;
  const mailtoLink = `mailto:?subject=Event Details&body=${encodeURIComponent(
    output
  )}`;
  window.location.href = mailtoLink;
});

document.getElementById("clearBtn").addEventListener("click", function () {
  // Refresh the page
  location.reload();
});

function copyToTextarea() {
  let formData = "";

  // Get the value from each input field and append to formData
  formData +=
    "Event Name: " + document.getElementById("eventName").value + "\n";
  formData +=
    "Event Description: " +
    document.getElementById("eventDescription").value +
    "\n";
  formData +=
    "Event Location: " + document.getElementById("eventLocation").value + "\n";
  formData +=
    "Event Organiser Name: " +
    document.getElementById("organiserName").value +
    "\n";
  formData +=
    "Event Organiser Email: " +
    document.getElementById("organiserEmail").value +
    "\n";
  formData +=
    "Event Start Time: " +
    document.getElementById("eventStartTime").value +
    "\n";
  formData +=
    "Event End Time: " + document.getElementById("eventEndTime").value + "\n";
  formData +=
    "Event Start Date: " +
    document.getElementById("eventStartDate").value +
    "\n";
  formData +=
    "Event End Date: " + document.getElementById("eventEndDate").value + "\n";

  // For radio buttons, you'll need to check which one is selected
  let onlineEventEls = document.getElementsByName("onlineEvent");
  for (let i = 0; i < onlineEventEls.length; i++) {
    if (onlineEventEls[i].checked) {
      formData += "Online Event: " + onlineEventEls[i].value + "\n";
      break;
    }
  }

  let eventRecordingEls = document.getElementsByName("eventRecording");
  for (let i = 0; i < eventRecordingEls.length; i++) {
    if (eventRecordingEls[i].checked) {
      formData += "Event Recording " + eventRecordingEls[i].value + "\n";
      break;
    }
  }

  let inpersonEventEls = document.getElementsByName("inpersonEvent");
  for (let i = 0; i < inpersonEventEls.length; i++) {
    if (inpersonEventEls[i].checked) {
      formData += "In-Person Event: " + inpersonEventEls[i].value + "\n";
      break;
    }
  }

  let eventAccessEls = document.getElementsByName("eventAccess");
  for (let i = 0; i < eventAccessEls.length; i++) {
    if (eventAccessEls[i].checked) {
      formData += "Is the event accessible? " + eventAccessEls[i].value + "\n";
      break;
    }
  }

  let seatingFacilitiesEls = document.getElementsByName("seatingFacilities");
  for (let i = 0; i < seatingFacilitiesEls.length; i++) {
    if (seatingFacilitiesEls[i].checked) {
      formData +=
        "Is seating available at the event? " +
        seatingFacilitiesEls[i].value +
        "\n";
      break;
    }
  }

  let wheelchairToiletsEls = document.getElementsByName("wheelchairToilets");
  for (let i = 0; i < wheelchairToiletsEls.length; i++) {
    if (seatingFacilitiesEls[i].checked) {
      formData +=
        "Wheelchair accessible toilet: " + wheelchairToiletsEls[i].value + "\n";
      break;
    }
  }

  let hearingLoopEls = document.getElementsByName("hearingLoop");
  for (let i = 0; i < hearingLoopEls.length; i++) {
    if (hearingLoopEls[i].checked) {
      formData +=
        "Hearing Loop Availability: " + hearingLoopEls[i].value + "\n";
      break;
    }
  }

  let islIntEls = document.getElementsByName("islInt");
  for (let i = 0; i < islIntEls.length; i++) {
    if (islIntEls[i].checked) {
      formData +=
        "Irish Sign Language (ISL) Interpretation Availability? " +
        islIntEls[i].value +
        "\n";
      break;
    }
  }

  let accessRequirementsEls = document.getElementsByName("accessRequirements");
  for (let i = 0; i < accessRequirementsEls.length; i++) {
    if (accessRequirementsEls[i].checked) {
      formData +=
        "Accessibility Requirements: " + accessRequirementsEls[i].value + "\n";
      break;
    }
  }

  let eventParkingEls = document.getElementsByName("eventParking");
  for (let i = 0; i < eventParkingEls.length; i++) {
    if (eventParkingEls[i].checked) {
      formData +=
        "Disabled Person's Parking near the event? " +
        eventParkingEls[i].value +
        "\n";
      break;
    }
  }

  let quietSpaceEls = document.getElementsByName("quietSpace");
  for (let i = 0; i < quietSpaceEls.length; i++) {
    if (quietSpaceEls[i].checked) {
      formData +=
        "Are there provisions for a designated quiet space? " +
        quietSpaceEls[i].value +
        "\n";
      break;
    }
  }

  let sensoryEnvironmentEls = document.getElementsByName("sensoryEnvironment");
  for (let i = 0; i < sensoryEnvironmentEls.length; i++) {
    if (sensoryEnvironmentEls[i].checked) {
      formData +=
        "Have you made provisions to create a sensory-friendly environment? " +
        sensoryEnvironmentEls[i].value +
        "\n";
      break;
    }
  }

  let sensoryInfoEls = document.getElementsByName("sensoryInfo");
  for (let i = 0; i < sensoryInfoEls.length; i++) {
    if (sensoryInfoEls[i].checked) {
      formData +=
        "Is event information, instructions, and communications clear, concise, and provided in multiple formats? " +
        sensoryInfoEls[i].value +
        "\n";
      break;
    }
  }

  let eventSlidesEls = document.getElementsByName("eventSlides");
  for (let i = 0; i < eventSlidesEls.length; i++) {
    if (eventSlidesEls[i].checked) {
      formData +=
        "Are the presentation slides (MS PowerPoint etc.,.) accessible? " +
        eventSlidesEls[i].value +
        "\n";
      break;
    }
  }

  let eventVideoEls = document.getElementsByName("eventVideo");
  for (let i = 0; i < eventVideoEls.length; i++) {
    if (eventVideoEls[i].checked) {
      formData +=
        "Does the event include a video showing or video call? " +
        eventVideoEls[i].value +
        "\n";
      break;
    }
  }

  let singleUseItemsEls = document.getElementsByName("singleUseItems");
  for (let i = 0; i < singleUseItemsEls.length; i++) {
    if (singleUseItemsEls[i].checked) {
      formData +=
        "Will single use items be available at the event? " +
        singleUseItemsEls[i].value +
        "\n";
      break;
    }
  }

  let zeroWasteEls = document.getElementsByName("zeroWaste");
  for (let i = 0; i < zeroWasteEls.length; i++) {
    if (zeroWasteEls[i].checked) {
      formData +=
        "Will the event be a zero waste event? " + zeroWasteEls[i].value + "\n";
      break;
    }
  }

  let veggieApproachEls = document.getElementsByName("veggieApproach");
  for (let i = 0; i < veggieApproachEls.length; i++) {
    if (veggieApproachEls[i].checked) {
      formData +=
        "Will the event take a veggie first approach? " +
        veggieApproachEls[i].value +
        "\n";
      break;
    }
  }

  let glutenFreeEls = document.getElementsByName("glutenFreeEls");
  for (let i = 0; i < glutenFreeEls.length; i++) {
    if (glutenFreeEls[i].checked) {
      formData +=
        "GLuten free options availability: " + glutenFreeEls[i].value + "\n";
      break;
    }
  }

  let transportEls = document.getElementsByName("transport");
  for (let i = 0; i < transportEls.length; i++) {
    if (transportEls[i].checked) {
      formData +=
        "Will you promote public transport and active travel (walking and cycling) to your event? " +
        transportEls[i].value +
        "\n";
      break;
    }
  }

  let sustainableSourcedEls = document.getElementsByName("sustainableSourced");
  for (let i = 0; i < sustainableSourcedEls.length; i++) {
    if (sustainableSourcedEls[i].checked) {
      formData +=
        "Are measures being taken to promote sustainable transportation options? " +
        sustainableSourcedEls[i].value +
        "\n";
      break;
    }
  }

  let promoteAwarenessEls = document.getElementsByName("promoteAwareness");
  for (let i = 0; i < promoteAwarenessEls.length; i++) {
    if (promoteAwarenessEls[i].checked) {
      formData +=
        "Will the event promote sustainability awareness and education among attendees? " +
        promoteAwarenessEls[i].value +
        "\n";
      break;
    }
  }

  formData +=
    "Any further comments or details? " +
    document.getElementById("comments").value +
    "\n";
  formData +=
    "Please provide contact details for any access enquiries (if not included elsewhere): " +
    document.getElementById("contacts").value +
    "\n";

  // Continue for other input fields and radio button groups...

  // Set the textarea value to the formData
  document.getElementById("copiedData").value = formData;
}
