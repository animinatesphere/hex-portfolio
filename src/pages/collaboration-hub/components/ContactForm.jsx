import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: '',
    services: [],
    hasDesigns: false,
    needsConsultation: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypeOptions = [
    { value: 'new-build', label: 'New Website/App Build' },
    { value: 'redesign', label: 'Website Redesign' },
    { value: 'maintenance', label: 'Ongoing Maintenance' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'optimization', label: 'Performance Optimization' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush Project)' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetOptions = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: '$50,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const serviceOptions = [
    { value: 'frontend', label: 'Frontend Development' },
    { value: 'react', label: 'React/Next.js Development' },
    { value: 'ui-ux', label: 'UI/UX Implementation' },
    { value: 'responsive', label: 'Responsive Design' },
    { value: 'performance', label: 'Performance Optimization' },
    { value: 'testing', label: 'Testing & QA' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleServiceChange = (service, checked) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev?.services, service]
        : prev?.services?.filter(s => s !== service)
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.name?.trim()) newErrors.name = 'Name is required';
      if (!formData?.email?.trim()) newErrors.email = 'Email is required';
      if (formData?.email && !/\S+@\S+\.\S+/?.test(formData?.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }

    if (step === 2) {
      if (!formData?.projectType) newErrors.projectType = 'Please select a project type';
      if (!formData?.timeline) newErrors.timeline = 'Please select a timeline';
      if (!formData?.budget) newErrors.budget = 'Please select a budget range';
    }

    if (step === 3) {
      if (!formData?.description?.trim()) {
        newErrors.description = 'Please describe your project';
      }
      if (formData?.services?.length === 0) {
        newErrors.services = 'Please select at least one service';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your inquiry! I\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      timeline: '',
      budget: '',
      description: '',
      services: [],
      hasDesigns: false,
      needsConsultation: false
    });
    setCurrentStep(1);
    setIsSubmitting(false);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Let's get to know you
        </h3>
        <p className="text-text-secondary">
          Tell me a bit about yourself and your company
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          value={formData?.name}
          onChange={(e) => handleInputChange('name', e?.target?.value)}
          error={errors?.name}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="john@company.com"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          error={errors?.email}
          required
        />
      </div>

      <Input
        label="Company/Organization"
        type="text"
        placeholder="Your Company Name (Optional)"
        value={formData?.company}
        onChange={(e) => handleInputChange('company', e?.target?.value)}
        description="Help me understand your business context"
      />
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Project Details
        </h3>
        <p className="text-text-secondary">
          Help me understand your project requirements
        </p>
      </div>

      <Select
        label="Project Type"
        placeholder="Select project type"
        options={projectTypeOptions}
        value={formData?.projectType}
        onChange={(value) => handleInputChange('projectType', value)}
        error={errors?.projectType}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Timeline"
          placeholder="When do you need this completed?"
          options={timelineOptions}
          value={formData?.timeline}
          onChange={(value) => handleInputChange('timeline', value)}
          error={errors?.timeline}
          required
        />

        <Select
          label="Budget Range"
          placeholder="What's your budget?"
          options={budgetOptions}
          value={formData?.budget}
          onChange={(value) => handleInputChange('budget', value)}
          error={errors?.budget}
          required
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Project Scope
        </h3>
        <p className="text-text-secondary">
          Tell me more about what you need
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-3">
          Services Needed <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {serviceOptions?.map((service) => (
            <Checkbox
              key={service?.value}
              label={service?.label}
              checked={formData?.services?.includes(service?.value)}
              onChange={(e) => handleServiceChange(service?.value, e?.target?.checked)}
            />
          ))}
        </div>
        {errors?.services && (
          <p className="mt-2 text-sm text-red-600">{errors?.services}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          rows={4}
          placeholder="Describe your project, goals, and any specific requirements..."
          value={formData?.description}
          onChange={(e) => handleInputChange('description', e?.target?.value)}
        />
        {errors?.description && (
          <p className="mt-2 text-sm text-red-600">{errors?.description}</p>
        )}
      </div>

      <div className="space-y-3">
        <Checkbox
          label="I have existing designs/mockups"
          checked={formData?.hasDesigns}
          onChange={(e) => handleInputChange('hasDesigns', e?.target?.checked)}
          description="This helps me understand the scope better"
        />

        <Checkbox
          label="I'd like to schedule a consultation call"
          checked={formData?.needsConsultation}
          onChange={(e) => handleInputChange('needsConsultation', e?.target?.checked)}
          description="Free 30-minute discovery call to discuss your project"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-muted px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-primary">
            Step {currentStep} of 3
          </span>
          <span className="text-sm text-text-secondary">
            {currentStep === 1 && 'Contact Info'}
            {currentStep === 2 && 'Project Details'}
            {currentStep === 3 && 'Requirements'}
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div 
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            Previous
          </Button>

          {currentStep < 3 ? (
            <Button
              type="button"
              onClick={handleNext}
              iconName="ArrowRight"
              iconPosition="right"
            >
              Next Step
            </Button>
          ) : (
            <Button
              type="submit"
              loading={isSubmitting}
              iconName="Send"
              iconPosition="right"
            >
              Send Inquiry
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;