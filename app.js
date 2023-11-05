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
  const quietSpace = document.querySelector(
    'input[name="quietSpace"]:checked'
  ).value;
  const eventParking = document.querySelector(
    'input[name="eventParking"]:checked'
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
  const eventWaste = document.querySelector(
    'input[name="eventWaste"]:checked'
  ).value;
  const sustainableTransport = document.querySelector(
    'input[name="sustainableTransport"]:checked'
  ).value;
  const sustainableSourced = document.querySelector(
    'input[name="sustainableSourced"]:checked'
  ).value;
  const promoteAwareness = document.querySelector(
    'input[name="promoteAwareness"]:checked'
  ).value;
  const comments = document.getElementById("comments").value;
  const contacts = document.getElementById("contacts").value;
  // ... Fetch other fields similarly ...

  const output = `
        Event name: ${eventName}
        Event Description: ${eventDescription}
        Event location: ${eventLocation}
        Organiser name: ${organiserName}
        Organiser email: ${organiserEmail}
        Event Start Time: ${eventStartTime}
        Event End Time: ${eventEndTime}
        Event Start Date: ${eventStartDate}
        Event End Date: ${eventEndDate}
        Online event: ${onlineEvent}
        In-Person event: ${inpersonEvent}
        Event accessibility: ${eventAccess}
        Seating available at the event? ${seatingFacilities} 
        Wheelchair accessible toilets? ${wheelchairToilets}
        Hearing Loop? ${hearingLoop}
        ISL Interpreter? ${islInt}
        Does the event have a question about accessibility requirements of attendees? ${accessRequirements}
        Designated quiet space? ${quietSpace}
        Disabled Person's Parking near the event? ${eventParking}
        Have you made provisions to create a sensory-friendly environment? ${sensoryEnvironment}
        Is event information, instructions, and communications clear, concise, and provided in multiple formats? ${sensoryInfo}
        Are the presentation slides (MS PowerPoint etc.,.) accessible? ${eventSlides}
        Does the event include a video showing or video call? ${eventVideo}
        Will waste be minimised at the event? ${eventWaste}
        Are measures being taken to promote sustainable transportation options? ${sustainableTransport}
        Are products and services procured for the event sustainably sourced or produced? ${sustainableSourced}
        Will the event promote sustainability awareness and education among attendees? ${promoteAwareness}
        Any further comments or details? ${comments}
        Please provide contact details for any access enquiries (if not included elsewhere): ${contacts}
       
    `;

  document.getElementById("output").innerText = output;
});

document.getElementById("copyBtn").addEventListener("click", function () {
  const output = document.getElementById("output");
  const textArea = document.createElement("textarea");
  textArea.value = output.innerText;
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
  doc.setFontSize(14); // Set the font size to approximately 18px

  // Wrap text to fit into the PDF page width
  const lines = doc.splitTextToSize(output, 180); // 180 is the max width of lines in mm
  doc.text(lines, 10, 10); // 10, 10 is the x, y start position for the text
  doc.save("event-details.pdf");
});

document.getElementById("emailBtn").addEventListener("click", function () {
  const output = document.getElementById("output").innerText;
  const mailtoLink = `mailto:?subject=Event Details&body=${encodeURIComponent(
    output
  )}`;
  window.location.href = mailtoLink;
});

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("eventForm").reset();
  document.getElementById("output").innerText = "";
});

function copyToTextarea() {
  let formData = "";

  // Get the value from each input field and append to formData
  formData +=
    "Event Name: " + document.getElementById("eventName").value + "\n";
  formData +=
    "Event Description: " + document.getElementById("eventDescription").value + "\n";
  formData +=
    "Event Location: " + document.getElementById("eventLocation").value + "\n";
  formData +=
    "Organiser Name: " + document.getElementById("organiserName").value + "\n";
  formData +=
    "Organiser Email: " +
    document.getElementById("organiserEmail").value +
    "\n";
  formData +=
    "Event Start Time: " + document.getElementById("eventStartTime").value + "\n";
  formData +=
    "Event End Time: " + document.getElementById("eventEndTime").value + "\n";
  formData +=
    "Event Start Date: " + document.getElementById("eventStartDate").value + "\n";
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
      formData += "Event accessibility: " + eventAccessEls[i].value + "\n";
      break;
    }
  }

  let seatingFacilitiesEls = document.getElementsByName("seatingFacilities");
  for (let i = 0; i < seatingFacilitiesEls.length; i++) {
    if (seatingFacilitiesEls[i].checked) {
      formData +=
        "Seating available at the event? " +
        seatingFacilitiesEls[i].value +
        "\n";
      break;
    }
  }

  let wheelchairToiletsEls = document.getElementsByName("wheelchairToilets");
  for (let i = 0; i < wheelchairToiletsEls.length; i++) {
    if (seatingFacilitiesEls[i].checked) {
      formData +=
        "Wheelchair accessible toilets? " +
        wheelchairToiletsEls[i].value +
        "\n";
      break;
    }
  }

  let hearingLoopEls = document.getElementsByName("hearingLoop");
  for (let i = 0; i < hearingLoopEls.length; i++) {
    if (hearingLoopEls[i].checked) {
      formData += "Hearing Loop? " + hearingLoopEls[i].value + "\n";
      break;
    }
  }

  let islIntEls = document.getElementsByName("islInt");
  for (let i = 0; i < islIntEls.length; i++) {
    if (islIntEls[i].checked) {
      formData += "ISL Interpreter? " + islIntEls[i].value + "\n";
      break;
    }
  }

  let accessRequirementsEls = document.getElementsByName("accessRequirements");
  for (let i = 0; i < accessRequirementsEls.length; i++) {
    if (accessRequirementsEls[i].checked) {
      formData +=
        "Does the event have a question about accessibility requirements of attendees? " +
        accessRequirementsEls[i].value +
        "\n";
      break;
    }
  }

  let quietSpaceEls = document.getElementsByName("quietSpace");
  for (let i = 0; i < quietSpaceEls.length; i++) {
    if (quietSpaceEls[i].checked) {
      formData += "Designated quiet space? " + quietSpaceEls[i].value + "\n";
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

  let eventWasteEls = document.getElementsByName("eventWaste");
  for (let i = 0; i < eventWasteEls.length; i++) {
    if (eventWasteEls[i].checked) {
      formData +=
        "Will waste be minimised at the event? " +
        eventWasteEls[i].value +
        "\n";
      break;
    }
  }

  let sustainableTransportEls = document.getElementsByName(
    "sustainableTransport"
  );
  for (let i = 0; i < sustainableTransportEls.length; i++) {
    if (sustainableTransportEls[i].checked) {
      formData +=
        "Are measures being taken to promote sustainable transportation options? " +
        sustainableTransportEls[i].value +
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
