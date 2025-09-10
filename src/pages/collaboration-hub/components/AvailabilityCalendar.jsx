import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Mock availability data
  const availableSlots = {
    '2025-01-27': ['10:00 AM', '2:00 PM', '4:00 PM'],
    '2025-01-28': ['9:00 AM', '11:00 AM', '3:00 PM'],
    '2025-01-29': ['10:00 AM', '1:00 PM'],
    '2025-01-30': ['9:00 AM', '2:00 PM', '4:00 PM'],
    '2025-02-03': ['10:00 AM', '11:00 AM', '3:00 PM'],
    '2025-02-04': ['9:00 AM', '1:00 PM', '4:00 PM'],
    '2025-02-05': ['10:00 AM', '2:00 PM'],
    '2025-02-06': ['9:00 AM', '11:00 AM', '3:00 PM', '4:00 PM']
  };

  const getDaysInMonth = (date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days?.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days?.push(new Date(year, month, day));
    }
    
    return days;
  };

  const formatDate = (date) => {
    return date?.toISOString()?.split('T')?.[0];
  };

  const isDateAvailable = (date) => {
    if (!date) return false;
    const dateStr = formatDate(date);
    return availableSlots?.[dateStr] && availableSlots?.[dateStr]?.length > 0;
  };

  const isPastDate = (date) => {
    if (!date) return false;
    const today = new Date();
    today?.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateSelect = (date) => {
    if (isPastDate(date) || !isDateAvailable(date)) return;
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return;
    
    const dateStr = selectedDate?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    alert(`Booking confirmed for ${dateStr} at ${selectedTime}!\n\nYou'll receive a calendar invite and Zoom link via email.`);
    
    // Reset selection
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth?.setMonth(prev?.getMonth() + direction);
      return newMonth;
    });
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Schedule a Consultation
        </h3>
        <p className="text-text-secondary">
          Book a free 30-minute discovery call to discuss your project
        </p>
      </div>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigateMonth(-1)}
          iconName="ChevronLeft"
          iconPosition="left"
        >
          Previous
        </Button>
        
        <h4 className="text-lg font-semibold text-text-primary">
          {monthNames?.[currentMonth?.getMonth()]} {currentMonth?.getFullYear()}
        </h4>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigateMonth(1)}
          iconName="ChevronRight"
          iconPosition="right"
        >
          Next
        </Button>
      </div>
      {/* Calendar Grid */}
      <div className="mb-6">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames?.map(day => (
            <div key={day} className="p-2 text-center text-sm font-medium text-text-secondary">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days?.map((date, index) => {
            if (!date) {
              return <div key={index} className="p-2" />;
            }

            const isAvailable = isDateAvailable(date);
            const isPast = isPastDate(date);
            const isSelected = selectedDate && formatDate(date) === formatDate(selectedDate);

            return (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                disabled={isPast || !isAvailable}
                className={`
                  p-2 text-sm rounded-lg transition-all duration-200 relative
                  ${isPast 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : isAvailable
                      ? isSelected
                        ? 'bg-accent text-white shadow-md'
                        : 'text-text-primary hover:bg-accent/10 hover:text-accent cursor-pointer' :'text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                {date?.getDate()}
                {isAvailable && !isPast && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-1 bg-accent rounded-full" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      {/* Time Slots */}
      {selectedDate && (
        <div className="mb-6">
          <h5 className="text-sm font-medium text-text-primary mb-3">
            Available times for {selectedDate?.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric'
            })}
          </h5>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {availableSlots?.[formatDate(selectedDate)]?.map(time => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`
                  p-3 text-sm rounded-lg border transition-all duration-200
                  ${selectedTime === time
                    ? 'bg-accent text-white border-accent shadow-md'
                    : 'border-border hover:border-accent hover:bg-accent/5 text-text-primary'
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Booking Confirmation */}
      {selectedDate && selectedTime && (
        <div className="bg-muted rounded-lg p-4 mb-6">
          <div className="flex items-center mb-3">
            <Icon name="Calendar" size={20} className="text-accent mr-2" />
            <span className="font-medium text-text-primary">
              Consultation Details
            </span>
          </div>
          
          <div className="space-y-2 text-sm text-text-secondary mb-4">
            <div className="flex items-center">
              <Icon name="Clock" size={16} className="mr-2" />
              <span>30 minutes</span>
            </div>
            <div className="flex items-center">
              <Icon name="Video" size={16} className="mr-2" />
              <span>Video call via Zoom</span>
            </div>
            <div className="flex items-center">
              <Icon name="MapPin" size={16} className="mr-2" />
              <span>Eastern Time (ET)</span>
            </div>
          </div>

          <Button
            onClick={handleBooking}
            fullWidth
            iconName="Check"
            iconPosition="left"
          >
            Confirm Booking
          </Button>
        </div>
      )}
      {/* Calendar Info */}
      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex items-start">
          <Icon name="Info" size={20} className="text-blue-600 mr-3 mt-0.5" />
          <div className="text-sm">
            <p className="text-blue-800 font-medium mb-1">What to expect:</p>
            <ul className="text-blue-700 space-y-1">
              <li>• Project requirements discussion</li>
              <li>• Timeline and budget planning</li>
              <li>• Technical approach overview</li>
              <li>• Next steps and proposal timeline</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;