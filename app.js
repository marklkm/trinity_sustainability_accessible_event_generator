// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.getElementById("submitBtn").addEventListener("click", function () {
  const eventName =
    document.getElementById("eventName").value || "Not Selected";
  const eventDescription =
    document.getElementById("eventDescription").value || "Not Selected";
  const eventLocation =
    document.getElementById("eventLocation").value || "Not Selected";
  const organiserName =
    document.getElementById("organiserName").value || "Not Selected";
  const organiserEmail =
    document.getElementById("organiserEmail").value || "Not Selected";
  const eventStartTime =
    document.getElementById("eventStartTime").value || "Not Selected";
  const eventEndTime =
    document.getElementById("eventEndTime").value || "Not Selected";
  const eventStartDate =
    document.getElementById("eventStartDate").value || "Not Selected";
  const eventEndDate =
    document.getElementById("eventEndDate").value || "Not Selected";

  // Radio buttons: Add null checks
  const onlineEventElement = document.querySelector(
    'input[name="onlineEvent"]:checked'
  );
  const onlineEvent = onlineEventElement ? onlineEventElement.value : null;

  const eventRecordingElement = document.querySelector(
    'input[name="eventRecording"]:checked'
  );
  const eventRecording = eventRecordingElement
    ? eventRecordingElement.value
    : null;

  const inpersonEventElement = document.querySelector(
    'input[name="inpersonEvent"]:checked'
  );
  const inpersonEvent = inpersonEventElement
    ? inpersonEventElement.value
    : null;

  const eventAccessElement = document.querySelector(
    'input[name="eventAccess"]:checked'
  );
  const eventAccess = eventAccessElement ? eventAccessElement.value : null;

  const seatingFacilitiesElement = document.querySelector(
    'input[name="seatingFacilities"]:checked'
  );
  const seatingFacilities = seatingFacilitiesElement
    ? seatingFacilitiesElement.value
    : null;

  const wheelchairToiletsElement = document.querySelector(
    'input[name="wheelchairToilets"]:checked'
  );
  const wheelchairToilets = wheelchairToiletsElement
    ? wheelchairToiletsElement.value
    : null;

  const hearingLoopElement = document.querySelector(
    'input[name="hearingLoop"]:checked'
  );
  const hearingLoop = hearingLoopElement ? hearingLoopElement.value : null;

  const islIntElement = document.querySelector('input[name="islInt"]:checked');
  const islInt = islIntElement ? islIntElement.value : null;

  const accessRequirementsElement = document.querySelector(
    'input[name="accessRequirements"]:checked'
  );
  const accessRequirements = accessRequirementsElement
    ? accessRequirementsElement.value
    : null;

  const eventParkingElement = document.querySelector(
    'input[name="eventParking"]:checked'
  );
  const eventParking = eventParkingElement ? eventParkingElement.value : null;

  const quietSpaceElement = document.querySelector(
    'input[name="quietSpace"]:checked'
  );
  const quietSpace = quietSpaceElement ? quietSpaceElement.value : null;

  const sensoryEnvironmentElement = document.querySelector(
    'input[name="sensoryEnvironment"]:checked'
  );
  const sensoryEnvironment = sensoryEnvironmentElement
    ? sensoryEnvironmentElement.value
    : null;

  const sensoryInfoElement = document.querySelector(
    'input[name="sensoryInfo"]:checked'
  );
  const sensoryInfo = sensoryInfoElement ? sensoryInfoElement.value : null;

  const eventSlidesElement = document.querySelector(
    'input[name="eventSlides"]:checked'
  );
  const eventSlides = eventSlidesElement ? eventSlidesElement.value : null;

  const eventVideoElement = document.querySelector(
    'input[name="eventVideo"]:checked'
  );
  const eventVideo = eventVideoElement ? eventVideoElement.value : null;

  const singleUseItemsElement = document.querySelector(
    'input[name="singleUseItems"]:checked'
  );
  const singleUseItems = singleUseItemsElement
    ? singleUseItemsElement.value
    : null;

  const zeroWasteElement = document.querySelector(
    'input[name="zeroWaste"]:checked'
  );
  const zeroWaste = zeroWasteElement ? zeroWasteElement.value : null;

  const veggieApproachElement = document.querySelector(
    'input[name="veggieApproach"]:checked'
  );
  const veggieApproach = veggieApproachElement
    ? veggieApproachElement.value
    : null;

  const glutenFreeElement = document.querySelector(
    'input[name="glutenFree"]:checked'
  );
  const glutenFree = glutenFreeElement ? glutenFreeElement.value : null;

  const transportElement = document.querySelector(
    'input[name="transport"]:checked'
  );
  const transport = transportElement ? transportElement.value : null;

  const sustainableSourcedElement = document.querySelector(
    'input[name="sustainableSourced"]:checked'
  );
  const sustainableSourced = sustainableSourcedElement
    ? sustainableSourcedElement.value
    : null;

  const promoteAwarenessElement = document.querySelector(
    'input[name="promoteAwareness"]:checked'
  );
  const promoteAwareness = promoteAwarenessElement
    ? promoteAwarenessElement.value
    : null;

  const comments =
    document.getElementById("comments").value ||
    "No additional comments provided";
  const contacts =
    document.getElementById("contacts").value ||
    "No additional contact details provided";

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
        Online Event: ${onlineEvent || "Not selected"}
        Event Recording: ${eventRecording || "Not selected"}
        In-Person Event: ${inpersonEvent || "Not selected"}
        Is the event accessible? ${eventAccess || "Not selected"}
        Is seating available at the event? ${
          seatingFacilities || "Not selected"
        }
        Wheelchair accessible toilet: ${wheelchairToilets || "Not selected"}
        Hearing Loop Availability: ${hearingLoop || "Not selected"}
        Irish Sign Language (ISL) Interpretation Availability? ${
          islInt || "Not selected"
        }
        Accessibility Requirements: ${accessRequirements || "Not selected"}
        Disabled Person's Parking Availability: ${
          eventParking || "Not selected"
        }
        Are there provisions for a designated quiet space? ${
          quietSpace || "Not selected"
        }
        Will provisions be made to create a sensory-friendly environment? ${
          sensoryEnvironment || "Not selected"
        }
        Is event information clear, concise, and provided in multiple formats? ${
          sensoryInfo || "Not selected"
        }
        Are the presentation slides accessible? ${eventSlides || "Not selected"}
        Does the event include a video showing or video call? ${
          eventVideo || "Not selected"
        }
        Will single-use items be available at the event? ${
          singleUseItems || "Not selected"
        }
        Will the event be a zero waste event? ${zeroWaste || "Not selected"}
        Gluten-free options availability: ${glutenFree || "Not selected"}
        Will the event take a veggie first approach? ${
          veggieApproach || "Not selected"
        }
        Will you promote public transport and active travel (walking and cycling) to your event? ${
          transport || "Not selected"
        }
        Are products and services procured for the event sustainably sourced or produced? ${
          sustainableSourced || "Not selected"
        }
        Will the event promote sustainability awareness and education among attendees? ${
          promoteAwareness || "Not selected"
        }
        Any further comments or details? ${comments}
        Please provide contact details for any access enquiries (if not included elsewhere): ${contacts}
    `;

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
    !eventAccess ||
    !seatingFacilities ||
    !wheelchairToilets ||
    !hearingLoop ||
    !accessRequirements ||
    !eventParking ||
    !quietSpace ||
    !sensoryEnvironment ||
    !sensoryInfo ||
    !eventSlides ||
    !eventVideo ||
    !singleUseItems ||
    !zeroWaste ||
    !veggieApproach ||
    !glutenFree ||
    !transport ||
    !sustainableSourced ||
    !promoteAwareness
  ) {
    alert("Please fill out all required fields.");
  } else {
    alert("Form submitted successfully!");
  }

  document.getElementById("output").innerText = output;
});

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

// PDF button

document.getElementById("pdfBtn").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const output = document.getElementById("output").innerText;

  // Handle image upload
  const imageInput = document.getElementById("eventImage");
  const file = imageInput.files[0];

  const lineHeight = 10;
  const pageHeight = doc.internal.pageSize.height;
  const marginTop = 10;
  const marginBottom = 10;
  const textWidth = 180;
  let yPosition = 20;

  if (file && file.type === "image/png") {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imgData = event.target.result;

      doc.addImage(imgData, "PNG", 10, marginTop, 180, 80);

      yPosition = 100;

      doc.setFontSize(22);
      doc.text("Event Details", 10, yPosition);
      yPosition += 20;

      doc.setFontSize(14);

      const lines = doc.splitTextToSize(output, textWidth);

      for (let i = 0; i < lines.length; i++) {
        if (yPosition + lineHeight > pageHeight - marginBottom) {
          doc.addPage();
          yPosition = marginTop;
        }
        doc.text(lines[i], 10, yPosition);
        yPosition += lineHeight;
      }

      doc.save("event-details.pdf");
    };
    reader.readAsDataURL(file);
  } else {
    const lines = doc.splitTextToSize(output, textWidth);

    doc.setFontSize(22);
    doc.text("Event Details", 10, yPosition);
    yPosition += 20;

    doc.setFontSize(14);

    for (let i = 0; i < lines.length; i++) {
      if (yPosition + lineHeight > pageHeight - marginBottom) {
        doc.addPage();
        yPosition = marginTop;
      }
      doc.text(lines[i], 10, yPosition);
      yPosition += lineHeight;
    }

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
