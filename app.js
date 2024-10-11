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

  // Adding new speaker accessibility options
  const hearingLoopAvailable = document.getElementById("hearingLoop").checked
    ? "Yes"
    : "No";
  const adjustablePodium = document.getElementById("adjustPodium").checked
    ? "Yes"
    : "No";
  const speechToTextService = document.getElementById("speechToText").checked
    ? "Yes"
    : "No";
  const personalMicrophone = document.getElementById("personalMic").checked
    ? "Yes"
    : "No";
  const otherAdjustments = document.getElementById("otherAdjust").checked
    ? "Yes"
    : "No";

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

  const sensoryInfoElement = document.querySelector(
    'input[name="sensoryInfo"]:checked'
  );
  const sensoryInfo = sensoryInfoElement ? sensoryInfoElement.value : null;

  const eventTimelineElement = document.querySelector(
    'input[name="eventTimeline"]:checked'
  );
  const eventTimeline = eventTimelineElement
    ? eventTimelineElement.value
    : null;

  const audioDescriptionElement = document.querySelector(
    'input[name="audioDescription"]:checked'
  );
  const audioDescription = audioDescriptionElement
    ? audioDescriptionElement.value
    : null;

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

  const maskingElement = document.querySelector(
    'input[name="masking"]:checked'
  );
  const masking = maskingElement ? maskingElement.value : null;

  const hepaElement = document.querySelector('input[name="hepa"]:checked');
  const hepa = hepaElement ? hepaElement.value : null;

  const openwindowsElement = document.querySelector(
    'input[name="openwindows"]:checked'
  );
  const openwindows = openwindowsElement ? openwindowsElement.value : null;

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

  const foodLabelElement = document.querySelector(
    'input[name="foodLabel"]:checked'
  );
  const foodLabel = foodLabelElement ? foodLabelElement.value : null;

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
       <strong>Event Name:</strong> ${eventName}<br>
        <strong>Event Description:</strong> ${eventDescription}<br>
        <strong>Event Location:</strong> ${eventLocation}<br>
        <strong>Event Organiser Name:</strong> ${organiserName}<br>
        <strong>Event Organiser Email:</strong> ${organiserEmail}<br>
        <strong>Event Start Time:</strong> ${eventStartTime}<br>
        <strong>Event End Time:</strong> ${eventEndTime}<br>
        <strong>Event Start Date:</strong> ${eventStartDate}<br>
        <strong>Event End Date:</strong> ${eventEndDate}<br>
        <strong>Online Event:</strong> ${onlineEvent || "Not selected"}<br>
        <strong>Event Recording:</strong> ${
          eventRecording || "Not selected"
        }<br>
        <strong>In-Person Event:</strong> ${inpersonEvent || "Not selected"}<br>
        <strong>Is the event accessible?</strong> ${
          eventAccess || "Not selected"
        }<br>
        <strong>Is seating available at the event?</strong> ${
          seatingFacilities || "Not selected"
        }<br>
        <strong>Wheelchair accessible toilet:</strong> ${
          wheelchairToilets || "Not selected"
        }<br>
        <strong>Hearing Loop Availability:</strong> ${
          hearingLoop || "Not selected"
        }<br>
        <strong>Irish Sign Language Interpretation Availability:</strong> ${
          islInt || "Not selected"
        }<br><br>

        <strong>- Speaker Accessibility Accommodations -</strong><br>
            <strong>Adjustable Podium Height:</strong> ${adjustablePodium}<br>
    <strong>Personal Microphone:</strong> ${personalMicrophone}<br>
    <strong>Speech-to-Text Service:</strong> ${speechToTextService}<br>
    <strong>Hearing Loop Available:</strong> ${hearingLoopAvailable}<br>
    <strong>Other Specified Adjustments:</strong> ${otherAdjustments}<br><br>

        <strong>Accessibility Requirements:</strong> ${
          accessRequirements || "Not selected"
        }<br>
        <strong>Disabled Person's Parking Availability:</strong> ${
          eventParking || "Not selected"
        }<br>
        <strong>Are there provisions for a designated quiet space?</strong> ${
          quietSpace || "Not selected"
        }<br>
        <strong>Is event information clear, concise, and provided in multiple formats?</strong> ${
          sensoryInfo || "Not selected"
        }<br>
        <strong>Is a detailed timeline of the event provided?</strong> ${
          eventTimeline || "Not selected"
        }<br>
        <strong>Audio description availability:</strong> ${
          audioDescription || "Not selected"
        }<br>
        <strong>Are the presentation slides accessible?</strong> ${
          eventSlides || "Not selected"
        }<br>
        <strong>Does the event include a video showing or video call?</strong> ${
          eventVideo || "Not selected"
        }<br>
        <strong>Masking:</strong> ${masking || "Not selected"}<br>
        <strong>HEPA:</strong> ${hepa || "Not selected"}<br>
         <strong>Open Windows:</strong> ${openwindows || "Not selected"}<br>
        <strong>Will single-use items be available at the event?</strong> ${
          singleUseItems || "Not selected"
        }<br>
        <strong>Will the event be a zero waste event?</strong> ${
          zeroWaste || "Not selected"
        }<br>
        <strong>Will the event take a veggie first approach?</strong> ${
          veggieApproach || "Not selected"
        }<br>
        <strong>Gluten free options availability:</strong> ${
          glutenFree || "Not selected"
        }<br>
        <strong>Are foods labelled with all their ingredients?</strong> ${
          foodLabel || "Not selected"
        }<br>
        <strong>Will you promote public transport and active travel to your event?</strong> ${
          transport || "Not selected"
        }<br>
        <strong>Are products procured for the event sustainably sourced or produced?</strong> ${
          sustainableSourced || "Not selected"
        }<br>
        <strong>Will the event promote sustainability awareness and education among attendees?</strong> ${
          promoteAwareness || "Not selected"
        }<br>
        <strong>Any further comments or details?</strong> ${comments}<br>
        <strong>Please provide contact details for any access enquiries:</strong> ${contacts}<br>
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
    !sensoryInfo ||
    !eventTimeline ||
    !audioDescription ||
    !eventSlides ||
    !eventVideo ||
    !masking ||
    !hepa ||
    !openwindows ||
    !singleUseItems ||
    !zeroWaste ||
    !veggieApproach ||
    !glutenFree ||
    !foodLabel ||
    !transport ||
    !sustainableSourced ||
    !promoteAwareness
  ) {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.classList.remove("d-none", "alert-success");
    feedbackElement.classList.add("alert-danger");
    feedbackElement.innerHTML = "Please fill out all required fields.";
  } else {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.classList.remove("d-none", "alert-danger");
    feedbackElement.classList.add("alert-success");
    feedbackElement.innerHTML = "Form submitted successfully!";
  }

  // Display the output
  document.getElementById("output").innerHTML = output;
});

document.getElementById("copyBtn").addEventListener("click", function () {
  const output = document.getElementById("output").innerText; // Use innerText or textContent to avoid copying HTML tags

  // Modern way to copy to clipboard
  navigator.clipboard
    .writeText(output)
    .then(function () {
      alert("Event details copied to clipboard!");
    })
    .catch(function (err) {
      console.error("Failed to copy: ", err);
    });
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
  const pageWidth = doc.internal.pageSize.width;
  const marginLeft = 10;
  const marginRight = 10;
  const marginTop = 10;
  const marginBottom = 10;
  const textWidth = pageWidth - marginLeft - marginRight;
  let yPosition = 20;

  const boldTextArray = [
    "Event Name:",
    "Event Description:",
    "Event Location:",
    "Event Organiser Name:",
    "Event Organiser Email:",
    "Event Start Time:",
    "Event End Time:",
    "Event Start Date:",
    "Event End Date:",
    "Online Event:",
    "Event Recording:",
    "In-Person Event:",
    "Is the event accessible?",
    "Is seating available at the event?",
    "Wheelchair accessible toilet:",
    "Hearing Loop Availability:",
    "Irish Sign Language Interpretation Availability:",
    "- Speaker Accessibility Accommodations -",
    "Accessibility Requirements:",
    "Disabled Person's Parking Availability:",
    "Are there provisions for a designated quiet space?",
    "Is event information clear, concise, and provided in multiple formats?",
    "Is a detailed timeline of the event provided?",
    "Audio description availability:",
    "Are the presentation slides accessible?",
    "Does the event include a video showing or video call?",
    "Masking:",
    "HEPA:",
    "Open Windows:",
    "Will single-use items be available at the event?",
    "Will the event be a zero waste event?",
    "Will the event take a veggie first approach?",
    "Gluten free options availability:",
    "Are foods labelled with all their ingredients?",
    "Will you promote public transport and active travel to your event?",
    "Are products procured for the event sustainably sourced or produced?",
    "Will the event promote sustainability awareness and education among attendees?",
    "Any further comments or details?",
    "Please provide contact details for any access enquiries:",
  ];

  function addTextWithBold(doc, text, yPosition) {
    const parts = text.split(
      /(Event Name:|Event Description:|Event Location:|Event Organiser Name:|Event Organiser Email:|Event Start Time:|Event End Time:|Event Start Date:|Event End Date:|Online Event:|Event Recording:|In-Person Event:|Is the event accessible\?|Is seating available at the event\?|Wheelchair accessible toilet:|Hearing Loop Availability:|Irish Sign Language Interpretation Availability:|- Speaker Accessibility Accommodations -|Accessibility Requirements:|Disabled Person's Parking Availability:|Are there provisions for a designated quiet space\?|Audio description availability:|Is event information clear, concise, and provided in multiple formats\?|Is a detailed timeline of the event provided\?|Audio description availability|Are the presentation slides accessible\?|Does the event include a video showing or video call\?|Masking:|HEPA:|Open Windows:|Will single-use items be available at the event\?|Will the event be a zero waste event\?|Will the event take a veggie first approach\?|Gluten free options availability:|Are foods labelled with all their ingredients\?|Will you promote public transport and active travel to your event\?|Are products procured for the event sustainably sourced or produced\?|Will the event promote sustainability awareness and education among attendees\?|Any further comments or details\?|Please provide contact details for any access enquiries:)/
    );

    parts.forEach((part, index) => {
      const wrappedLines = doc.splitTextToSize(part, textWidth); // Automatically split text to fit width
      wrappedLines.forEach((line) => {
        if (yPosition + lineHeight > pageHeight - marginBottom) {
          doc.addPage();
          yPosition = marginTop; // Reset yPosition at the top of a new page
        }

        if (boldTextArray.includes(line)) {
          doc.setFont("Helvetica", "bold");
        } else {
          doc.setFont("Helvetica", "normal");
        }

        doc.text(line, marginLeft, yPosition);
        yPosition += lineHeight;
      });
    });

    return yPosition;
  }

  if (file && file.type === "image/png") {
    const reader = new FileReader();
    reader.onload = function (event) {
      const imgData = event.target.result;

      doc.addImage(imgData, "PNG", 10, marginTop, 180, 80);

      yPosition = 100;

      doc.setFontSize(22);
      doc.text("Event Details", marginLeft, yPosition);
      yPosition += 20;

      doc.setFontSize(14);

      yPosition = addTextWithBold(doc, output, yPosition);

      doc.save("event-details.pdf");
    };
    reader.readAsDataURL(file);
  } else {
    doc.setFontSize(22);
    doc.text("Event Details", marginLeft, yPosition);
    yPosition += 20;

    doc.setFontSize(14);

    yPosition = addTextWithBold(doc, output, yPosition);

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
  // Get all input elements
  let inputs = document.querySelectorAll("input");

  // Loop through each input and clear its value or reset its state
  inputs.forEach(function (input) {
    if (input.type === "radio" || input.type === "checkbox") {
      // Uncheck radio buttons and checkboxes
      input.checked = false;
    } else {
      // Clear the value for other input types (e.g., text, number, etc.)
      input.value = "";
    }
  });

  // Optionally clear textareas and select elements as well
  let textareas = document.querySelectorAll("textarea");
  textareas.forEach(function (textarea) {
    textarea.value = "";
  });

  let selects = document.querySelectorAll("select");
  selects.forEach(function (select) {
    select.selectedIndex = 0;
  });
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
        "Irish Sign Language Interpretation Availability:" +
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

  let eventTimelineEls = document.getElementsByName("eventTimeline");
  for (let i = 0; i < eventTimelineEls.length; i++) {
    if (eventTimelineEls[i].checked) {
      formData +=
        "Is a detailed timeline of the event provided? " +
        eventTimelineEls[i].value +
        "\n";
      break;
    }
  }

  let audioDescriptionEls = document.getElementsByName("audioDescription");
  for (let i = 0; i < audioDescriptionEls.length; i++) {
    if (audioDescriptionEls[i].checked) {
      formData +=
        "Audio description availability: " +
        audioDescriptionEls[i].value +
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

  let maskingEls = document.getElementsByName("masking");
  for (let i = 0; i < maskingEls.length; i++) {
    if (maskingEls[i].checked) {
      formData += "Masking: " + maskingEls[i].value + "\n";
      break;
    }
  }

  let hepaEls = document.getElementsByName("hepa");
  for (let i = 0; i < hepaEls.length; i++) {
    if (hepaEls[i].checked) {
      formData += "HEPA: " + hepaEls[i].value + "\n";
      break;
    }
  }

  let openwindowsEls = document.getElementsByName("openwindows");
  for (let i = 0; i < openwindowsEls.length; i++) {
    if (openwindowsEls[i].checked) {
      formData += "Open Windows: " + openwindowsEls[i].value + "\n";
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

  let glutenFreeEls = document.getElementsByName("glutenFree");
  for (let i = 0; i < glutenFreeEls.length; i++) {
    if (glutenFreeEls[i].checked) {
      formData +=
        "Gluten free options availability:" + glutenFreeEls[i].value + "\n";
      break;
    }
  }

  let foodLabelEls = document.getElementsByName("foodLabel");
  for (let i = 0; i < foodLabelEls.length; i++) {
    if (foodLabelEls[i].checked) {
      formData +=
        "Are foods labelled with all their ingredients? " +
        foodLabelEls[i].value +
        "\n";
      break;
    }
  }

  let transportEls = document.getElementsByName("transport");
  for (let i = 0; i < transportEls.length; i++) {
    if (transportEls[i].checked) {
      formData +=
        "Will you promote public transport and active travel to your event? " +
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
    "Please provide contact details for any access enquiries: " +
    document.getElementById("contacts").value +
    "\n";

  // Continue for other input fields and radio button groups...

  // Set the textarea value to the formData
  document.getElementById("copiedData").value = formData;
}
