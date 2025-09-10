import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CompanySpotlight = ({ companies }) => {
  const [selectedCompany, setSelectedCompany] = useState(companies?.[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl shadow-lg border border-border p-6 mb-12"
    >
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
          <Icon name="Building2" size={20} className="text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary">Company Spotlight</h3>
      </div>
      {/* Company Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {companies?.map((company) => (
          <button
            key={company?.id}
            onClick={() => setSelectedCompany(company)}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCompany?.id === company?.id
                ? 'bg-accent text-white' :'bg-muted text-text-secondary hover:bg-accent/10 hover:text-accent'
            }`}
          >
            <Image
              src={company?.logo}
              alt={`${company?.name} logo`}
              className="w-4 h-4 mr-2 object-contain"
            />
            {company?.name}
          </button>
        ))}
      </div>
      {/* Company Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCompany?.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Company Info */}
          <div>
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src={selectedCompany?.logo}
                  alt={`${selectedCompany?.name} logo`}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary">{selectedCompany?.name}</h4>
                <p className="text-sm text-text-secondary">{selectedCompany?.industry}</p>
                <div className="flex items-center mt-1 space-x-4">
                  <span className="text-xs text-text-secondary flex items-center">
                    <Icon name="Users" size={12} className="mr-1" />
                    {selectedCompany?.size}
                  </span>
                  <span className="text-xs text-text-secondary flex items-center">
                    <Icon name="MapPin" size={12} className="mr-1" />
                    {selectedCompany?.location}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {selectedCompany?.description}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {selectedCompany?.stats?.map((stat, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-accent">{stat?.value}</div>
                  <div className="text-xs text-text-secondary">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h5 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Target" size={16} className="mr-2 text-accent" />
              My Contributions
            </h5>
            
            <div className="space-y-3 mb-4">
              {selectedCompany?.contributions?.map((contribution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-accent" />
                  </div>
                  <p className="text-sm text-text-secondary">{contribution}</p>
                </div>
              ))}
            </div>

            {/* Technologies Used */}
            <h5 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Code2" size={16} className="mr-2 text-accent" />
              Technologies Used
            </h5>
            <div className="flex flex-wrap gap-2">
              {selectedCompany?.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Company Website Link */}
      <div className="mt-6 pt-6 border-t border-border">
        <Button
          variant="outline"
          size="sm"
          iconName="ExternalLink"
          iconPosition="right"
          iconSize={16}
          onClick={() => window.open(selectedCompany?.website, '_blank')}
        >
          Visit {selectedCompany?.name}
        </Button>
      </div>
    </motion.div>
  );
};

export default CompanySpotlight;